import React, {useState} from 'react';
import {connect} from 'react-redux';

import {Grid, IconButton} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {BlogModalStyle} from "./blogModalStyle";
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";
import {useFormik} from "formik";

const BlogModal = ({props,
                     setToggleBlogModal,
                     blog: {image, description, title, category}
                   }) => {
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [blogEditMode, setBlogEditMode] = useState(false);
  const [blogTitle, setTitle] = useState(title)
  const [categories, setCategories] = useState(category);
  const [categoriesEditMode, setCategoriesEditMode] = useState(false);

  setTimeout(() => {
    setVisibilityClass(setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);

  const blogHandler = useFormik({
    initialValues: {title: blogTitle},
    onSubmit: values => {
      setTitle(values.title);
      setBlogEditMode(false);
    }
    })
  console.log(category);

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
              <div>This is category edit mode</div>
            ) : (
            <div className={`${blogModalWrapper}__modal-content__blog-categories`}>
                {category.map(category => (
                  <div className={`${blogModalWrapper}__modal-content__blog-category`}>{category}</div>
                ))}
              <div onClick={ ()=>setCategoriesEditMode(!categoriesEditMode)} className={`${blogModalWrapper}__modal-content__blog-category`}><EditButton/></div>
            </div>

            )}

            {blogEditMode ? (
              <div>
                <textarea
                  rows = {2}
                  value={blogHandler.values.title}
                  name = "title"
                  onChange={blogHandler.handleChange}
                  className={`${blogModalWrapper}__modal-content__blog-title__input`}
                />
                <CustomButton handler={blogHandler.handleSubmit}  mode={setBlogEditMode}/>
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
              {description}
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
