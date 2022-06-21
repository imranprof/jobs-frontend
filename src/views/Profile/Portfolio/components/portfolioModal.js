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

let changedSelectedCategories = false;
let tempSelectedCategories = [];
let tempEditTitle;
let tempEditDescription;

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
  const [selectedCategories, setSelectedCategories] = useState(mapCategoriesForMultiSelect(categories));

  const filterCategories = (categories) => {
    return mapCategoriesForMultiSelect(categoriesData).filter((category) => {
      let flag = true;
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].value === category.value) {
          flag = false;
        }
      }
      if (flag) return category;
    });
  };

  const [filteredCategories, setFilteredCategories] = useState(filterCategories(categories));

  const setEditCategories = (categories) => {
    tempSelectedCategories = categories
    changedSelectedCategories = true
    setFilteredCategories(filterCategories(categories))
  }

  const categoryHandler = () => {
    if (changedSelectedCategories) setSelectedCategories(tempSelectedCategories)
    setFilteredCategories(filterCategories(tempSelectedCategories))
    toggleEditCategoryMode(false)
  };

  const [editTitleMode, toggleEditTitleMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const titleHandler = () => {
    setEditTitle(tempEditTitle);
    toggleEditTitleMode(false);
  };

  const [editDescMode, toggleEditDescMode] = useState(false);
  const [editDesc, setEditDesc] = useState(description);

  const descriptionSegments = (description) => {
    return description.split("\n\n").map((segment, index) =>
      <p key={index}>{segment}</p>
    );
  }

  const descriptionHandler = () => {
    setEditDesc(tempEditDescription);
    toggleEditDescMode(false);
  };

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
                      onChange={setEditCategories}
                      className={`${modalWrapper}__modal-content__text-content__category__selectDropdown`}
                    />
                  </div>
                  <CustomButton handler={categoryHandler} mode={toggleEditCategoryMode}/>
                </div>
              </> : <>
                {selectedCategories?.map((category, index) => <span key={index}
                                                                    className={`${modalWrapper}__modal-content__text-content__category__text`}>
                  {category.label}
                </span>)}

                <span onClick={() => {
                  toggleEditCategoryMode(!editCategoryMode)
                  changedSelectedCategories = false
                  tempSelectedCategories = selectedCategories
                  setFilteredCategories(filterCategories(selectedCategories))
                }}>
                  <EditButton/>
                </span> </>}
              </div>
              {editTitleMode ? <div>
                  <TextareaAutosize
                    defaultValue={editTitle}
                    name="title"
                    onChange={(e) => {
                      tempEditTitle = e.target.value;
                    }
                    }
                    className={`${modalWrapper}__modal-content__text-content__title__input`}
                  />
                  <CustomButton handler={titleHandler} mode={toggleEditTitleMode}/>
                </div>
                : <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <span className={`${modalWrapper}__modal-content__text-content__title`}>
                    {editTitle}
                  </span>
                  <span onClick={() => {
                    toggleEditTitleMode(!editTitleMode);
                    tempEditTitle = editTitle;
                  }}>
                    <EditButton/>
                  </span>
                </div>
              }
              {editDescMode ? <div>
                  <TextareaAutosize
                    defaultValue={tempEditDescription}
                    name="description"
                    onChange={(e) => {
                      tempEditDescription = e.target.value;
                    }
                    }
                    className={`${modalWrapper}__modal-content__text-content__description__input`}
                  />
                  <CustomButton handler={descriptionHandler} mode={toggleEditDescMode}/>
                </div> :
                <div className={`${modalWrapper}__modal-content__text-content__wrapper`}>
                  <div className={`${modalWrapper}__modal-content__text-content__description`}>
                    {descriptionSegments(editDesc)}
                  </div>
                  <span onClick={() => {
                    toggleEditDescMode(!editDescMode);
                    tempEditDescription = editDesc;
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
