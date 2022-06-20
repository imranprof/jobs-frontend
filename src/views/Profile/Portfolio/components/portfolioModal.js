import React, {useState} from 'react';
import Select from "react-select";

import {Grid, IconButton, TextareaAutosize} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {PortfolioModalStyle} from "./portfolioModalStyle";
import EditButton from "../../../../lib/editButton";
import CustomButton from "../../../../lib/customButtons";
import {useFormik} from "formik";

const PortfolioModal = ({
                          setTogglePortfolioModal,
                          portfolio: {image, categories, title, description}
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
  const [selectedCategories, setSelectCategories] = useState(mapCategoriesForMultiSelect(categories));

  const filterCategories = (selectedCategories) => {
    if (selectedCategories !== undefined || selectedCategories === []) {
      let tempCategories = mapCategoriesForMultiSelect(categoriesData)
      return tempCategories.filter((ex1) => {
        return !selectedCategories.find((ex2) => {
          return ex1.label === ex2.label
        })
      })
    }
  };

  const [filteredCategories, setFilteredCategories] = useState(filterCategories(selectedCategories));
  let categoriesEditValues = [];

  const setCategoriesEditValues = (elements) => {
    console.log("/***/\nSetCategoriesEditValues:")
    categoriesEditValues = elements
    setFilteredCategories(filterCategories(categoriesEditValues))
  };

  const categoryHandler = () => {
    console.log("/***/\nCategoryHandler:")
    setFilteredCategories(filterCategories(categoriesEditValues))
    setSelectCategories(filterCategories(filteredCategories))
    toggleEditCategoryMode(false)
  };

  const [editTitleMode, toggleEditTitleMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const titleHandler = useFormik({
    initialValues: {title: title},
    onSubmit: values => {
      setEditTitle(values.title);
      toggleEditTitleMode(false);
    }
  });

  const [editDescMode, toggleEditDescMode] = useState(false);
  const [editDesc, setEditDesc] = useState(description);

  const descriptionSegments = (description) => {
    return description.split("\n\n").map((segment, index) =>
      <p key={index}>{segment}</p>
    );
  }

  const descriptionHandler = useFormik({
    initialValues: {description: description},
    validateOnChange: false,
    onSubmit: values => {
      setEditDesc(values.description);
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
              <div className={`${modalWrapper}__modal-content__text-content__wrapper`}> {editCategoryMode ? <>
                <div className={`${modalWrapper}__modal-content__text-content__category`}>
                  <div>
                    <h4>Select categories</h4>
                    <Select
                      isMulti
                      options={filteredCategories}
                      defaultValue={selectedCategories}
                      onChange={setCategoriesEditValues}
                      className={`${modalWrapper}__modal-content__text-content__category__selectDropdown`}
                    />
                  </div>
                  <CustomButton handler={() => categoryHandler(selectedCategories)} mode={toggleEditCategoryMode}/>
                </div>
              </> : <>
                {selectedCategories?.map((category, index) => <span key={index}
                                                                    className={`${modalWrapper}__modal-content__text-content__category__text`}>
                  {category.label}
                </span>)}

                <span onClick={() => {
                  toggleEditCategoryMode(!editCategoryMode)
                }}>
                  <EditButton/>
                </span> </>}
              </div>
              {editTitleMode ? <div>
                  <textarea
                    value={titleHandler.values.title}
                    name="title"
                    onChange={titleHandler.handleChange}
                    className={`${modalWrapper}__modal-content__text-content__title__input`}
                  />
                  <CustomButton handler={titleHandler.handleSubmit} mode={toggleEditTitleMode}/>
                </div>
                : <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <span className={`${modalWrapper}__modal-content__text-content__title`}>
                    {editTitle}
                  </span>
                  <span onClick={() => {
                    toggleEditTitleMode(!editTitleMode)
                  }}>
                    <EditButton/>
                  </span>
                </div>
              }
              {editDescMode ? <div>
                  <TextareaAutosize
                    defaultValue={descriptionHandler.values.description}
                    name="description"
                    onChange={descriptionHandler.handleChange}
                    className={`${modalWrapper}__modal-content__text-content__description__input`}
                  />
                  <CustomButton handler={descriptionHandler.handleSubmit} mode={toggleEditDescMode}/>
                </div> :
                <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <div className={`${modalWrapper}__modal-content__text-content__description`}>
                    {descriptionSegments(editDesc)}
                  </div>
                  <span onClick={() => {
                    toggleEditDescMode(!editDescMode)
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

export default PortfolioModal;
