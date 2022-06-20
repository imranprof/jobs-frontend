import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useFormik} from "formik";
import Select from 'react-select';
import dynamic from 'next/dynamic'

import {Grid, IconButton} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {BlogModalStyle} from "./blogModalStyle";
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';

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

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

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
    // console.log(filteredCategoriesList);
  }
  const categoryHandler = (e) => {
    setCategoryList(categoriesEditValue);
    setCategoriesEditMode(!categoriesEditMode);
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
                {(categoryList.categories?.map(e => (
                  <div className={`${blogModalWrapper}__modal-content__blog-category`}>{e}</div>
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
                    // editorState = {editorState}
                    oonEditorStateChange={setEditorState}
                  />
                </div>

              ) : (
                  <div>
                    <div onClick={ ()=>setDescriptionMode(!descriptionMode)} className={`${blogModalWrapper}__modal-content__blog-category`}><EditButton/></div>
                    {description}
                  </div>

                )}

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    categories: state.profile.categories
  }
}

export default connect(mapStateToProps)(BlogModal);
