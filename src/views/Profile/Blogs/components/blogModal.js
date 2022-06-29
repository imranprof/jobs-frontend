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
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";
import {renderToString} from "react-dom/server";
import {updateCategories, updateDescription, updateTitle} from "../../../../store/actions/blogActions";


const BlogModal = (props) => {
  const {blog} = props;
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [categoriesEditMode, setCategoriesEditMode] = useState(false);
  const [descriptionMode, setDescriptionMode] = useState(false);
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


  const titleHandler = useFormik({
    initialValues: {title: blog.title},
    validateOnChange: false,
    onSubmit: values => {
      props.updateTitle(values.title, blog.id);
      setTitleEditMode(false);
    }
    })

  const titleCancelHandler = () =>{
    titleHandler.setFieldValue("title", blog.title);
    setTitleEditMode(!titleEditMode);
  }

  const categoriesData = [
    {id: 1, title: "development"},
    {id: 2, title: "mobile"},
    {id: 3, title: "apps"},
    {id: 4, title: "security"},
    {id: 5, title: "ios"}
  ];

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
    return mapCategoriesForMultiSelect(categoriesData).filter((category) => {
      let flag = true;
      for (let i = 0; i < categories?.length; i++) {
        if (categories[i].value === category.value) {
          flag = false;
        }
      }
      if (flag) return category;
    });
  };

  const categoryHandler = useFormik({
    initialValues: {categories: selectedCategories},
    enableReinitialize: true,
    onSubmit: values => {
      setSelectedCategories(values.categories);
      props.updateCategories(blog.id, mapCategoriesForSave(values.categories));
      setCategoriesEditMode(false)
    },
    onReset: () => {
      setCategoriesEditMode(false);
    }
  })

  const changeEditorState = (state) => {
    setEditorState(state);
  }

  const descriptionHandler = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const tempDescription = draftToHtml(rawContent);
    console.log(typeof tempDescription);
    props.updateDescription(blog.id, tempDescription);
    setDescriptionMode(!descriptionMode);
  }

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
            {categoriesEditMode ? (
              <div className={`${blogModalWrapper}__modal-content__categories-edit`}>
              <Select
                isMulti
                options = {filterCategories(categoryHandler.values.categories)}
                value = {categoryHandler.values.categories}
                onChange ={categories => {
                  categoryHandler.setValues({categories: categories})
                }}
                className={`${blogModalWrapper}__modal-content__categories-edit__selectDropdown`}
              />
              <CustomButton handler={categoryHandler.handleSubmit} mode={categoryHandler.handleReset}/>
              </div>
            ) : (
                <div className={`${blogModalWrapper}__modal-content__categories-wrapper`}>
                  {(selectedCategories?.map((category,index) => (
                    <div key = {index} className={`${blogModalWrapper}__modal-content__category`}>{category.label}</div>
                  )))}
                  <div onClick={ ()=>setCategoriesEditMode(!categoriesEditMode)}><EditButton/></div>

                </div>
              )}

            {titleEditMode ? (
              <div className={`${blogModalWrapper}__modal-content__title__edit`}>
                <TextField
                  multiline
                  variant = "outlined"
                  name = "title"
                  value={titleHandler.values.title}
                  onChange={titleHandler.handleChange}
                  className={`${blogModalWrapper}__modal-content__title__input`}
                />
                <CustomButton handler={titleHandler.handleSubmit}  mode={titleCancelHandler}/>
              </div>
            ) : (
              <div className={`${blogModalWrapper}__modal-content__title__editButton`}>
              <Grid item className={`${blogModalWrapper}__modal-content__title`}>{blog.title}</Grid>
              <div onClick={ ()=>setTitleEditMode(!titleEditMode)}> <EditButton/> </div>
              </div>
            )}

            <Grid className={`${blogModalWrapper}__modal-content__image-container`}>
              <img
                src={blog.image}
                alt="modal image"
              />
            </Grid>

            <Grid item className={`${blogModalWrapper}__modal-content__text-content`}>
              {descriptionMode? (
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
                    <div onClick={ ()=>setDescriptionMode(!descriptionMode)} className={`${blogModalWrapper}__modal-content__description__edit-button`}><EditButton/></div>
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
            { descriptionMode &&
            <CustomButton handler={descriptionHandler} mode={setDescriptionMode}/>
            }
          </Grid>
        </div>
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  updateTitle: (blog_title, blog_id) => dispatch(updateTitle(blog_title, blog_id)),
  updateDescription: (blog_id, description) => dispatch(updateDescription(blog_id, description)),
  updateCategories: (blog_id, categories) => dispatch(updateCategories(blog_id, categories))
})


export default connect(null,mapDispatchToProps)(BlogModal);
