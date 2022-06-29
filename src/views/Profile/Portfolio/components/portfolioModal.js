import React, {useState} from 'react';
import {connect} from "react-redux";
import Select from "react-select";
import {useFormik} from "formik";

import {Grid, IconButton, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import {PortfolioModalStyle} from "./portfolioModalStyle";
import CustomButton from "../../../../lib/customButtons";
import {updateTitle, updateDescription, updateCategories} from "../../../../store/actions/portfolioActions";
import {ProfileData} from "../../../../../API/mock/profile/profileData";

const PortfolioModal = (props => {
  const theme = useTheme();
  const modalWrapper = PortfolioModalStyle(theme).modalWrapper;
  const [slidingClass, SetSlidingClass] = useState("");
  const {title, image, categories, description} = props.portfolio;
  const {categoriesData} = ProfileData;
  const {setTogglePortfolioModal, editMode} = props;

  const updateCategoriesHandler = (portfolio, selectedCategories) => {
    portfolio.categories = mapCategoriesForState(selectedCategories);
    props.updateCategories(portfolio);
  }

  const updateTitleHandler = (portfolio, title) => {
    portfolio.title = title;
    props.updateTitle(portfolio);
  }

  const updateDescriptionHandler = (portfolio, description) => {
    portfolio.description = description;
    props.updateDescription(portfolio);
  }

  setTimeout(() => {
    SetSlidingClass(setTogglePortfolioModal ? `${modalWrapper}__modal-content--visible` : "")
  }, 1);

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    value: category.id,
    label: category.title
  }));

  const mapCategoriesForState = (categories) => categories?.map((category) => ({
    id: category.value,
    title: category.label
  }));

  const [mode, toggleMode] = useState(editMode)

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

  const formHandler = useFormik({
    initialValues: {
      categories: mapCategoriesForMultiSelect(categories),
      title: title,
      description: description,
    },
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values)
      updateCategoriesHandler(props.portfolio, values.categories);
      updateTitleHandler(props.portfolio, values.title);
      updateDescriptionHandler(props.portfolio, values.description);
      toggleMode(false);
    },
    onReset: () => {
      toggleMode(false);
    },
    validate: values => {
      let errors = {};
      if (!values.categories || values.categories?.length < 1) {
        errors.categories = "Project must have at least one category";
      }
      return errors;
    }
  });

  const descriptionSegments = (description) => {
    return description.split("\n\n").map((segment, index) =>
      <p key={index}>{segment}</p>
    );
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
              {mode ?
                <>
                  <div className={`${modalWrapper}__modal-content__text-content__category`}>
                    <h4>Select categories</h4>
                    <Select
                      isMulti
                      name="categories"
                      options={filterCategories(formHandler.values.categories)}
                      value={formHandler.values.categories}
                      onChange={categories => {
                        formHandler.setValues({
                          categories: categories,
                          description: formHandler.values.description,
                          title: formHandler.values.title
                        })
                      }}
                      className={`${modalWrapper}__modal-content__text-content__category__selectDropdown`}
                    />
                  </div>
                  <div>
                    <TextField
                      variant="outlined"
                      value={formHandler.values.title}
                      name="title"
                      onChange={formHandler.handleChange}
                      className={`${modalWrapper}__modal-content__text-content__title__input`}
                    />
                  </div>
                  <div>
                    <TextField
                      value={formHandler.values.description}
                      name="description"
                      multiline
                      maxRows={6}
                      InputProps={{disableUnderline: true}}
                      onChange={formHandler.handleChange}
                      className={`${modalWrapper}__modal-content__text-content__description__input`}
                    />
                  </div>
                  <CustomButton handler={formHandler.handleSubmit} mode={formHandler.handleReset}/>
                </> :
                <>
                  <div className={`${modalWrapper}__modal-content__text-content__categoryWrapper`}>
                    <div className={`${modalWrapper}__modal-content__text-content__categoryWrapper__categories`}>
                      {mapCategoriesForMultiSelect(categories)?.map((category, index) => <span key={index}
                                                                                               className={`${modalWrapper}__modal-content__text-content__category__text`}>
                  {category.label}
                </span>)}
                    </div>
                  </div>
                  <div className={`${modalWrapper}__modal-content__text-content`}>
                    <div className={`${modalWrapper}__modal-content__text-content__title`}>
                      {title}
                    </div>
                    <div className={`${modalWrapper}__modal-content__text-content__description`}>
                      {descriptionSegments(description)}
                    </div>
                  </div>
                </>
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
})

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (portfolio) => dispatch(updateTitle(portfolio)),
  updateDescription: (portfolio) => dispatch(updateDescription(portfolio)),
  updateCategories: (portfolio) => dispatch(updateCategories(portfolio)),
});

export default connect(null, mapDispatchToProps)(PortfolioModal);
