import React, {useState} from 'react';
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

const BlogModal = ({
                     setToggleBlogModal,
                     blog: {image, description, title,categories}
                   }) => {
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [blogTitle, setTitle] = useState(title)
  const [categoriesEditMode, setCategoriesEditMode] = useState(false);
  const [descriptionMode, setDescriptionMode] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);

  const html = renderToString(currentDescription);
  const blocksFromHtml = convertFromHTML(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const currentState = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(currentState);

  setTimeout(() => {
    setVisibilityClass(setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);

  const titleHandler = useFormik({
    initialValues: {title: blogTitle},
    validateOnChange: false,
    onSubmit: values => {
      setTitle(values.title);
      setTitleEditMode(false);
    }
    })
  const titleCancelHandler = () =>{
    titleHandler.setFieldValue("title", blogTitle);
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
  const [selectedCategories, setSelectedCategories] = useState(mapCategoriesForMultiSelect(categories));

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
    setCurrentDescription(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    setDescriptionMode(!descriptionMode);
  }

  return (
    <div className={`${blogModalWrapper}__body`}>
      <div className={`${blogModalWrapper}__dialog`}>
        <div className={`${blogModalWrapper}__modal-content ${visibilityClass}`}>
          <IconButton className={`${blogModalWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        setToggleBlogModal(false)
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
              <Grid item className={`${blogModalWrapper}__modal-content__title`}>{blogTitle}</Grid>
              <div onClick={ ()=>setTitleEditMode(!titleEditMode)}> <EditButton/> </div>
              </div>
            )}

            <Grid className={`${blogModalWrapper}__modal-content__image-container`}>
              <img
                src={image}
                alt="modal image"
              />
            </Grid>
            <Grid item className={`${blogModalWrapper}__modal-content__text-content`}>
              {descriptionMode? (
                <div >
                  <Editor
                    editorState = {editorState}
                    onEditorStateChange={changeEditorState}
                    wrapperClassName = {`${blogModalWrapper}__modal-content__description__toolbar-editor-wrapper`}
                    editorClassName={`${blogModalWrapper}__modal-content__description__editor`}
                  />
                </div>
              ) : (
                  <div className={`${blogModalWrapper}__modal-content__description`}>
                    <div onClick={ ()=>setDescriptionMode(!descriptionMode)} className={`${blogModalWrapper}__modal-content__description__edit-button`}><EditButton/></div>
                    <div>
                      {typeof currentDescription === 'string' ? (
                          <div  dangerouslySetInnerHTML={{__html: currentDescription}} />

                      ) :
                        (
                          <div>
                            {currentDescription}
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

export default BlogModal;

