import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useFormik} from "formik";
import Select from 'react-select';
import dynamic from 'next/dynamic'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from "draftjs-to-html";

import {Grid, IconButton, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {BlogModalStyle} from "./blogModalStyle";
import CustomButton from "../../../../lib/customButtons";
import {renderToString} from "react-dom/server";
import {updateCategories, updateDescription, updateTitle} from "../../../../store/actions/blogActions";

const BlogModal = (props) => {
  const {blog, editMode} = props;
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [mode, setMode] = useState(editMode);
  let html;
  if(typeof blog.description === 'string'){
    html = blog.description;
  }
  else{
    html = renderToString(blog.description);
  }
  const blocksFromHtml = convertFromHTML(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const currentState = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(currentState);

  setTimeout(() => {
    setVisibilityClass(props.setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    value: category.id,
    label: category.title
  }));
  const mapCategoriesForSave = (categories) => categories?.map((category) => ({
    id: category.value,
    title: category.label
  }));

  const [selectedCategories, setSelectedCategories] = useState(mapCategoriesForMultiSelect(blog.categories));
  const filterCategories = (categories) => {
    return mapCategoriesForMultiSelect(props.categoriesData).filter((category) => {
      let flag = true;
      for (let i = 0; i < categories?.length; i++) {
        if (categories[i].value === category.value) {
          flag = false;
        }
      }
      if (flag) return category;
    });
  };

  const changeEditorState = (state) => {
    setEditorState(state);
  }

  const descriptionHandler = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const tempDescription = draftToHtml(rawContent);
    props.updateDescription(blog.id, tempDescription);
  }

  const editHandler = useFormik( {
    initialValues: {categories: selectedCategories, title: blog.title},
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: values => {
      setSelectedCategories(values.categories);
      props.updateCategories(blog.id, mapCategoriesForSave(values.categories));
      props.updateTitle(values.title, blog.id);
      descriptionHandler();
      setMode(false);
    },
    onReset: () => {
      setMode(false);
  }
  })

  return (
    <div className={`${blogModalWrapper}__body`}>
      <div className={`${blogModalWrapper}__dialog`}>
        <div className={`${blogModalWrapper}__modal-content ${visibilityClass}`}>
          <IconButton className={`${blogModalWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        props.setToggleBlogModal(false)
                      }}>
            <CloseIcon/>
          </IconButton>
          <Grid container>
            {mode ? (
              <div className={`${blogModalWrapper}__modal-content__categories-edit`}>
              <Select
                isMulti
                options = {filterCategories(editHandler.values.categories)}
                value = {editHandler.values.categories}
                onChange ={categories => {
                  editHandler.setValues({categories: categories, title: editHandler.values.title})
                }}
                className={`${blogModalWrapper}__modal-content__categories-edit__selectDropdown`}
              />
              </div>
            ) : (
                <div className={`${blogModalWrapper}__modal-content__categories-wrapper`}>
                  {(selectedCategories?.map((category,index) => (
                    <div key = {index} className={`${blogModalWrapper}__modal-content__category`}>{category.label}</div>
                  )))}
                </div>
              )}

            {mode ? (
              <div className={`${blogModalWrapper}__modal-content__title__edit`}>
                <TextField
                  multiline
                  variant = "outlined"
                  name = "title"
                  value={editHandler.values.title}
                  onChange={editHandler.handleChange}
                  className={`${blogModalWrapper}__modal-content__title__input`}
                />
              </div>
            ) : (
              <div className={`${blogModalWrapper}__modal-content__title__editButton`}>
              <Grid item className={`${blogModalWrapper}__modal-content__title`}>{blog.title}</Grid>
              </div>
            )}

            <Grid className={`${blogModalWrapper}__modal-content__image-container`}>
              <img
                src={blog.image}
                alt="modal image"
              />
            </Grid>

            <Grid item className={`${blogModalWrapper}__modal-content__text-content`}>
              {mode? (
                <div >
                  <Editor
                    editorState = {editorState}
                    onEditorStateChange={changeEditorState}
                    toolbarClassName = {`${blogModalWrapper}__modal-content__description__toolbar`}
                    wrapperClassName = {`${blogModalWrapper}__modal-content__description__toolbar-editor-wrapper`}
                    editorClassName={`${blogModalWrapper}__modal-content__description__editor`}
                  />
                </div>
              ) : (
                  <div className={`${blogModalWrapper}__modal-content__description`}>
                    <div>
                      {typeof blog.description === 'string' ? (
                          <div  dangerouslySetInnerHTML={{__html: blog.description}} />
                      ) :
                        (
                          <div>
                            {blog.description}
                          </div>
                        ) }
                    </div>
                  </div>
                )}
            </Grid>
            { mode &&
            <CustomButton handler={editHandler.handleSubmit} mode={editHandler.handleReset}/>
            }
          </Grid>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    categoriesData: state.profile.categoriesData
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (blog_title, blog_id) => dispatch(updateTitle(blog_title, blog_id)),
  updateDescription: (blog_id, description) => dispatch(updateDescription(blog_id, description)),
  updateCategories: (blog_id, categories) => dispatch(updateCategories(blog_id, categories))
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogModal);
