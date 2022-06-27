import React, {useState} from 'react';
import {connect} from "react-redux";
import Select from "react-select";
import {useFormik} from "formik";

import {Grid, IconButton, Input, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {PortfolioModalStyle} from "./portfolioModalStyle";
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";
import {
  bioEditMode, bioText,
  expertisesText,
  headlineEditMode,
  headlineText,
  introText
} from "../../../../store/actions/editProfileActions";

const PortfolioModal = ({
                          setTogglePortfolioModal,
                          portfolio: {id, image, categories, title, description}
                        }) => {
  const theme = useTheme();
  const modalWrapper = PortfolioModalStyle(theme).modalWrapper;
  const [slidingClass, SetSlidingClass] = useState("");

  setTimeout(() => {
    SetSlidingClass(setTogglePortfolioModal ? `${modalWrapper}__modal-content--visible` : "")
  }, 1);

  const categoriesData = [
    {id: 1, title: "Development"},
    {id: 2, title: "Application"},
    {id: 3, title: "Photoshop"},
    {id: 4, title: "Figma"},
    {id: 5, title: "Web Design"}
  ];

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    value: category.id,
    label: category.title
  }));

  const [editCategoryMode, toggleEditCategoryMode] = useState(false)
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
      toggleEditCategoryMode(false);
    },
    onReset: () => {
      toggleEditCategoryMode(false);
    }
  })

  const [editTitleMode, toggleEditTitleMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const titleHandler = useFormik({
    initialValues: {title: editTitle},
    enableReinitialize: true,
    onSubmit: values => {
      setEditTitle(values.title);
      toggleEditTitleMode(false);
    },
    onReset: () => {
      toggleEditTitleMode(false);
    }
  });

  const [editDescMode, toggleEditDescMode] = useState(false);
  const [editDesc, setEditDesc] = useState(description);

  const descriptionSegments = (description) => {
    return description.split("\n\n").map((segment, index) =>
      <p key={index}>{segment}</p>
    );
  };

  const descriptionHandler = useFormik({
    initialValues: {description: editDesc},
    enableReinitialize: true,
    onSubmit: values => {
      setEditDesc(values.description);
      toggleEditDescMode(false);
    },
    onReset: () => {
      toggleEditDescMode(false);
    }
  });

  return (
    <div className={`${modalWrapper}__body`}>
      <div className={`${modalWrapper}__dialog`}>
        <div className={`${modalWrapper}__modal-content ${slidingClass}`}>
          <IconButton className={`${modalWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        setTogglePortfolioModal(false)
                      }}>
            <CloseIcon/>
          </IconButton>
          <Grid container>
            <Grid item md={6} className={`${modalWrapper}__modal-content__image-container`}>
              <img
                className={`${modalWrapper}__modal-content__image-container__image`}
                src={image}
                alt="image"
              />
            </Grid>
            <Grid item md={6} className={`${modalWrapper}__modal-content__text-content`}>
              <div className={`${modalWrapper}__modal-content__text-content__categoryWrapper`}> {editCategoryMode ? <>
                <div className={`${modalWrapper}__modal-content__text-content__category`}>
                  <div>
                    <h4>Select categories</h4>
                    <Select
                      isMulti
                      options={filterCategories(categoryHandler.values.categories)}
                      value={categoryHandler.values.categories}
                      onChange={categories => {
                        categoryHandler.setValues({categories: categories})
                      }}
                      className={`${modalWrapper}__modal-content__text-content__category__selectDropdown`}
                    />
                  </div>
                  <CustomButton handler={categoryHandler.handleSubmit} mode={categoryHandler.handleReset}/>
                </div>
              </> : <>
                <div className={`${modalWrapper}__modal-content__text-content__categoryWrapper__categories`}>
                  {selectedCategories?.map((category, index) => <span key={index}
                                                                      className={`${modalWrapper}__modal-content__text-content__category__text`}>
                  {category.label}
                </span>)}</div>

                <span onClick={() => {
                  toggleEditCategoryMode(!editCategoryMode)
                }}>
                  <EditButton/>
                </span> </>}
              </div>
              {editTitleMode ? <div>
                  <TextField
                    variant="outlined"
                    value={titleHandler.values.title}
                    name="title"
                    onChange={titleHandler.handleChange}
                    className={`${modalWrapper}__modal-content__text-content__title__input`}
                  />
                  <CustomButton handler={titleHandler.handleSubmit} mode={titleHandler.handleReset}/>
                </div>
                : <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <span className={`${modalWrapper}__modal-content__text-content__title`}>
                    {editTitle}
                  </span>
                  <span onClick={() => {
                    toggleEditTitleMode(!editTitleMode);
                  }}>
                    <EditButton/>
                  </span>
                </div>
              }
              {editDescMode ? <div>
                  <TextField
                    value={descriptionHandler.values.description}
                    name="description"
                    multiline
                    maxRows={6}
                    InputProps={{disableUnderline: true}}
                    onChange={descriptionHandler.handleChange}
                    className={`${modalWrapper}__modal-content__text-content__description__input`}
                  />
                  <CustomButton handler={descriptionHandler.handleSubmit} mode={descriptionHandler.handleReset}/>
                </div> :
                <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <div className={`${modalWrapper}__modal-content__text-content__description`}>
                    {descriptionSegments(editDesc)}
                  </div>
                  <span onClick={() => {
                    toggleEditDescMode(!editDescMode);
                  }}>
                    <EditButton/>
                  </span>
                </div>
              }
              <div
                className={`${modalWrapper}__modal-content__text-content__link-button-wrapper`}>
                <a
                  className={`${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                  LIKE THIS
                  <Icon
                    className={`${FontAwesomeIcons.thumbsUp} ${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button__thumbs-up-icon`}/>
                </a>
                <a
                  className={`${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                  VIEW PROJECT
                  <Icon
                    className={`${FontAwesomeIcons.angleRight} ${modalWrapper}__modal-content__text-content__link-button-wrapper__link-button__right-angular-icon`}/>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  setHeadlineMode: (boolean) => dispatch(headlineEditMode(boolean)),
  setHeadline: (value) => dispatch(headlineText(value)),
  setIntro: (editValue) => dispatch(introText(editValue)),
  setExpertises: (expertisesValue) => dispatch(expertisesText(expertisesValue)),
  setBioMode: (boolean) => dispatch(bioEditMode(boolean)),
  setBio: (editValue) => dispatch(bioText(editValue))
});

export default connect(mapStateToProps)(PortfolioModal);
