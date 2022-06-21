import React, {useState} from 'react';
import {useFormik} from "formik";
import Select from 'react-select';
import dynamic from 'next/dynamic'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from "draftjs-to-html";

const htmlToDraft = typeof window === 'object' && require('html-to-draftjs').default;



import {Grid, IconButton} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {BlogModalStyle} from "./blogModalStyle";
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";

const BlogModal = ({
                     setToggleBlogModal,
                     blog: {image, description, title,category}
                   }) => {
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [blogEditMode, setBlogEditMode] = useState(false);
  const [blogTitle, setTitle] = useState(title)
  const [categoriesEditValue, setCategoriesEditValue] = useState({categories: category})
  const [categoriesEditMode, setCategoriesEditMode] = useState(false);
  const [categoryList,setCategoryList]  = useState({categories: category});
  const [descriptionMode, setDescriptionMode] = useState(false);
  const [currentDescription, setCurrentDescription] = useState(description);

  const blocksFromHtml = htmlToDraft(currentDescription);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const currentState = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(currentState)

  setTimeout(() => {
    setVisibilityClass(setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);

  const titleHandler = useFormik({
    initialValues: {title: blogTitle},
    onSubmit: values => {
      setTitle(values.title);
      setBlogEditMode(false);
    }
    })

  const categoriesData = [
    {value: 1, label: "development"},
    {value: 2, label: "mobile"},
    {value: 3, label: "apps"},
    {value: 4, label: "security"}
  ]
  const selectedCategories = []
  categoryList.categories?.map((element) => {
    selectedCategories.push({label: element, value: element})
  });

  const filteredCategories = (selectedCategories) => {
    if (selectedCategories !== undefined) {
      let tempExpertises = categoriesData
      return tempExpertises.filter((ex1) => {
        return !selectedCategories.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  }

  const [filteredCategoriesList, setFilteredCategoriesList] = useState(filteredCategories(selectedCategories))
  const selectChangeHandler = (elements) => {
    setCategoriesEditValue({
      categories: Array.isArray(elements) ? elements.map(obj => obj.label) : []
    })
    setFilteredCategoriesList(filteredCategories(elements))
  }

  const categoryHandler = (e) => {
    setCategoryList(categoriesEditValue);
    setCategoriesEditMode(!categoriesEditMode);
  }

  const changeEditorState = (state) => {
    setEditorState(state);
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
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
                options = {filteredCategoriesList}
                defaultValue={selectedCategories}
                onChange = {selectChangeHandler}
                className={`${blogModalWrapper}__modal-content__categories-edit__selectDropdown`}
              />
              <CustomButton handler={categoryHandler} mode={setCategoriesEditMode}/>
              </div>
            ) : (
            <div className={`${blogModalWrapper}__modal-content__blog-categories`}>
                {(categoryList.categories?.map(category => (
                  <div className={`${blogModalWrapper}__modal-content__blog-category`}>{category}</div>
                )))}
              <div onClick={ ()=>setCategoriesEditMode(!categoriesEditMode)} className={`${blogModalWrapper}__modal-content__blog-category`}><EditButton/></div>
            </div>

            )}

            {blogEditMode ? (
              <div className={`${blogModalWrapper}__modal-content__blog-title__edit`}>
                <textarea
                  rows = {2}
                  value={titleHandler.values.title}
                  name = "title"
                  onChange={titleHandler.handleChange}
                  className={`${blogModalWrapper}__modal-content__blog-title__input`}
                />
                <CustomButton handler={titleHandler.handleSubmit}  mode={setBlogEditMode}/>
              </div>
            ) : (
              <div className={`${blogModalWrapper}__modal-content__blog-title__editButton`}>
              <Grid item className={`${blogModalWrapper}__modal-content__blog-title`}>{blogTitle}</Grid>
              <div onClick={ ()=>setBlogEditMode(!blogEditMode)}> <EditButton/> </div>
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
                <div>

                  <Editor
                    editorState = {editorState}
                    onEditorStateChange={changeEditorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                  />
                  <CustomButton handler={descriptionHandler} mode={setDescriptionMode}/>
                </div>

              ) : (
                  <div>
                    <div onClick={ ()=>setDescriptionMode(!descriptionMode)} className={`${blogModalWrapper}__modal-content__blog-category`}><EditButton/></div>
                      <div dangerouslySetInnerHTML={{__html: currentDescription}} />
                  </div>

                )}

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;

