import React, {useState} from 'react';

import {Grid, IconButton} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {BlogModalStyle} from "./blogModalStyle";
import EditButton from "../../../../lib/editButton";
import ErrorMessages from "../../../../lib/errorMessages";
import CustomButton from "../../../../lib/customButtons";
import {useFormik} from "formik";

const BlogModal = ({
                     setToggleBlogModal,
                     blog: {image, description, title, category}
                   }) => {
  const theme = useTheme();
  const blogModalWrapper = BlogModalStyle(theme).blogModalWrapper;
  const [visibilityClass, setVisibilityClass] = useState("");
  const [blogEditMode, setBlogEditMode] = useState(false);
  const [blogTitle, setTitle] = useState(title)

  setTimeout(() => {
    setVisibilityClass(setToggleBlogModal ? `${blogModalWrapper}__modal-content--visible` : "")
  }, 1);



  const changeBlogMode = () => {
    setBlogEditMode(blogEditMode ? false : true);
  }
  const changeTitle = (value) => {
    setTitle(value);
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
            <span className={`${blogModalWrapper}__modal-content__blog-category`}>{category}</span>
            {blogEditMode ? (
              <div>
                <input
                  type="text"
                  value={blogTitle}
                  name='Blog Title'
                  onChange={e => changeTitle(e.target.value)}
                  className={`${blogModalWrapper}__modal-content__blog-title__input`}
                />
                <CustomButton  mode={changeBlogMode}/>
              </div>
            ) : (
              <div>
              <Grid item className={`${blogModalWrapper}__modal-content__blog-title`}>{title}</Grid>
              <span onClick={ changeBlogMode}> <EditButton/> </span>
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

export default BlogModal;
