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
import {updateBlog} from "../../../../store/actions/blogActions";
import CustomSnackbar from "../../../../lib/customSnackbar";

const BlogModal = (props) => {
  console.log(props);
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
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

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
    console.log(tempDescription.length);
    return tempDescription;
  }

  const editHandler = useFormik( {
    initialValues: {categories: selectedCategories, title: blog.title},
    validateOnChange: false,
    onSubmit: values => {
      setSelectedCategories(values.categories);
      props.updateBlog(blog.id, mapCategoriesForSave(values.categories), values.title, descriptionHandler())
      setToast({show: true, severity: "success", text: "Successfully updated the blog!"});
      setMode(false);
    },
    onReset: () => {
      setMode(false);
    },
    validate: values => {
      let errors = "";
      if (!values.categories || values.categories?.length < 1) {
        errors = "categories error";
        setToast({show: true, severity: "error", text: "Required Categories must not be blank"});
      }
      if( !values.title){
        errors = "title errors";
        setToast({show: true, severity: "error", text: "Required title field must not be blank"});
      }
      if(descriptionHandler().length<=8){
        errors = "description errors";
        setToast({show: true, severity: "error", text: "Required description field must not be blank"});
      }
      return errors;
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
          {toast.show &&
          <CustomSnackbar
            toast={toast}
            setToast={setToast}/>
          }
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
  updateBlog: (blog_id, categories, title, description) => dispatch(updateBlog(blog_id, categories, title, description))
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogModal);
