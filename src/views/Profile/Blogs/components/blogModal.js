import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {useFormik} from "formik";
import Select from 'react-select';
import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  {ssr: false})
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw, ContentState} from 'draft-js';
import draftToHtml from "draftjs-to-html";

import {Grid, IconButton, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {BlogModalStyle} from "./blogModalStyle";
import CustomButton from "../../../../lib/profile/customButtons";
import {addBlogAction, updateBlogAction} from "../../../../store/actions/blogActions";
import CustomSnackbar from "../../../../lib/customSnackbar";
import htmlToDraft from 'html-to-draftjs'
import CustomUploadImage from "../../../../lib/profile/customUploadImage";

const BlogModal = (props) => {

  const {blog, editMode, addMode, toast, setToast} = props;
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [mode, setMode] = useState(editMode);
  const [image, setImage] = useState('')
  const readingTime = require('reading-time');
  let currentState;
  let buttonText;
  if (addMode) {
    currentState = EditorState.createEmpty();
    buttonText = "Add";
  } else {
    const blocksFromHtml = htmlToDraft(blog.body);
    const {contentBlocks, entityMap} = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    currentState = EditorState.createWithContent(contentState);
  }
  const [editorState, setEditorState] = useState(currentState);
  const dispatch = useDispatch()

  setTimeout(() => {
    setVisibilityClass(props.setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);

  const convertToBase64 = (file) => {
    return new Promise((resolve => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
    }));
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleImageUpload = async () => {
    let base64Image = await convertToBase64(image);
    return base64Image;
  }

  const allCategories = props.categoriesData?.map((category) => ({
    category_id: category.id,
    title: category.title
  }));

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    id: category.id,
    value: category.category_id,
    label: category.title
  }));
  const mapCategoriesForSave = (categories) => categories?.map((category) => ({
    id: category.id,
    category_id: category.value,
    title: category.label
  }));

  const [selectedCategories, setSelectedCategories] = useState(mapCategoriesForMultiSelect(blog.categories));
  const filterCategories = (categories) => {
    return mapCategoriesForMultiSelect(allCategories).filter((category) => {
      let flag = true;
      for (let i = 0; i < categories?.length; i++) {
        if (categories[i].value === category.value) {
          flag = false;
        }
      }
      if (flag) return category;
    });
  };

  const changeEditorState = (editorState) => {
    setEditorState(editorState);
  }
  let readTime = props.readTime;
  const descriptionHandler = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    const tempDescription = draftToHtml(rawContent);
    readTime = Math.round(readingTime(tempDescription).minutes);
    return tempDescription;
  }

  const editHandler = useFormik({
    initialValues: {categories: selectedCategories, title: blog.title},
    validateOnChange: false,
    onSubmit: async (values) => {
      setSelectedCategories(values.categories);
      if (addMode) {
        dispatch(addBlogAction({
          categories: mapCategoriesForSave(values.categories),
          title: values.title,
          body: descriptionHandler(),
          readTime: readTime,
          image: (!image) ? null : await handleImageUpload()
        }))
        props.setToggleBlogModal(false)
        setToast({show: true, severity: "success", text: "Blog Created successfully!"});
      } else {
        dispatch(updateBlogAction({
          id: blog.id,
          categories: mapCategoriesForSave(values.categories),
          title: values.title,
          body: descriptionHandler(),
          readTime: readTime,
          image: (!image) ? null : await handleImageUpload()
        }, props.blog))
        setToast({show: true, severity: "success", text: "Successfully updated the blog!"});
        setMode(false);
      }

    },
    onReset: () => {
      if (addMode) {
        props.setToggleBlogModal(false)
      } else {
        setMode(false);
      }
    },
    validate: values => {
      let errors = {};
      if (!values.categories || values.categories?.length < 1) {
        errors.categories = "Required Categories must not be blank";
        setToast({show: true, severity: "error", text: errors.categories});
      }
      if (!values.title) {
        errors.title = "Required title field must not be blank";
        setToast({show: true, severity: "error", text: errors.title});
      }
      if (descriptionHandler().length <= 8) {
        errors.description = "Required description field must not be blank";
        setToast({show: true, severity: "error", text: errors.description});
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
                  placeholder={"Select Categories"}
                  options={filterCategories(editHandler.values.categories)}
                  value={editHandler.values.categories}
                  onChange={categories => {
                    editHandler.setValues({categories: categories, title: editHandler.values.title})
                  }}
                />
              </div>
            ) : (
              <div className={`${blogModalWrapper}__modal-content__categories-wrapper`}>
                {(selectedCategories?.map((category, index) => (
                  <div key={index} className={`${blogModalWrapper}__modal-content__category`}>{category.label}</div>
                )))}
              </div>
            )}

            {mode ? (
              <div className={`${blogModalWrapper}__modal-content__title__edit`}>
                <TextField
                  multiline
                  variant="outlined"
                  name="title"
                  placeholder={"Enter blog title"}
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
            {(mode || addMode) ? (
              <>
                <div className={`${blogModalWrapper}__modal-content__image-container`}>
                  <img
                    src={(image === '') ? blog.image : URL.createObjectURL(image)}
                  />
                </div>
                <CustomUploadImage changeHandler={handleImageChange} selectedImage={image}/>
              </>
            ) : (
              <Grid className={`${blogModalWrapper}__modal-content__image-container`}>
                <img
                  src={blog.image}
                  alt="modal image"
                />
              </Grid>
            )
            }

            <Grid item className={`${blogModalWrapper}__modal-content__text-content`}>
              {mode ? (
                <div>
                  <Editor
                    editorState={editorState}
                    placeholder={"Enter Description of blog"}
                    onEditorStateChange={changeEditorState}
                    toolbarClassName={`${blogModalWrapper}__modal-content__description__toolbar`}
                    wrapperClassName={`${blogModalWrapper}__modal-content__description__toolbar-editor-wrapper`}
                    editorClassName={`${blogModalWrapper}__modal-content__description__editor`}
                  />
                </div>
              ) : (
                <div className={`${blogModalWrapper}__modal-content__description`}>
                  <div>
                    {typeof blog.body === 'string' ? (
                        <div dangerouslySetInnerHTML={{__html: blog.body}}/>
                      ) :
                      (
                        <div>
                          {blog.body}
                        </div>
                      )}
                  </div>
                </div>
              )}
            </Grid>
            {mode &&
            <CustomButton handler={editHandler.handleSubmit} mode={editHandler.handleReset} actionText={buttonText}/>
            }
          </Grid>
          {editMode && toast.show &&
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
  return {
    categoriesData: state.blogs.allCategories
  }
}

export default connect(mapStateToProps)(BlogModal);
