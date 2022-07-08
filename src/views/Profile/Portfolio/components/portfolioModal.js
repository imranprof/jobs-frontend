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
import CustomButton from "../../../../lib/profile/customButtons";
import {updatePortfolio} from "../../../../store/actions/portfolioActions";
import CustomSnackbar from "../../../../lib/customSnackbar";
import ErrorMessage from "../../../../lib/errorMessage";
import {update} from "../operations";

const PortfolioModal = (props => {
  const theme = useTheme();
  const modalWrapper = PortfolioModalStyle(theme).modalWrapper;
  const [slidingClass, SetSlidingClass] = useState("");
  const {title, image, categories, description} = props.portfolio;
  const {categoriesData, setTogglePortfolioModal, editMode} = props;
  const [mode, toggleMode] = useState(editMode)
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

  setTimeout(() => {
    SetSlidingClass(setTogglePortfolioModal ? `${modalWrapper}__modal-content--visible` : "")
  }, 1);

  const allCategories = categoriesData?.map((category) => ({
    category_id: category.id,
    title: category.title
  }));

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    id: category.id,
    value: category.category_id,
    label: category.title
  }));

  const mapCategoriesForState = (categories) => categories?.map((category) => ({
    id: category.id,
    category_id: category.value,
    title: category.label
  }));

  const updateHandler = ({portfolio, selectedCategories, title, description}) => {
    const oldPortfolio = {...portfolio};
    portfolio.categories = mapCategoriesForState(selectedCategories);
    portfolio.title = title;
    portfolio.description = description;
    update(oldPortfolio, portfolio, props.updatePortfolio);
  }

  const filterCategories = (categories) => {
    return mapCategoriesForMultiSelect(allCategories)?.filter((category) => {
      let flag = true;
      for (let i = 0; i < categories?.length; i++) {
        if (categories[i].label === category.label) {
          flag = false;
        }
      }
      if (flag) return category;
    });
  };

  const categoriesChangeHandler = categories => {
    formHandler.setValues({
      categories: categories,
      description: formHandler.values.description,
      title: formHandler.values.title
    })
  }

  const formHandler = useFormik({
    initialValues: {
      categories: mapCategoriesForMultiSelect(categories),
      title: title,
      description: description,
    },
    onSubmit: values => {
      updateHandler({
        portfolio: props.portfolio,
        selectedCategories: values.categories,
        title: values.title,
        description: values.description
      });
      setToast({show: true, severity: "success", text: "Successfully updated the portfolio."});
      toggleMode(false);
    },
    onReset: () => {
      toggleMode(false);
    },
    validate: values => {
      let errors = {};
      if (!values.categories || values.categories?.length < 1) {
        errors.categories = "Portfolio must have at least one category!";
      }
      if (!values.title) {
        errors.title = "Portfolio must have a title!";
      } else if (values.title.length > 50) {
        errors.title = "Portfolio title can have maximum 50 characters!";
      }
      if (!values.description) {
        errors.description = "Portfolio must have a description!";
      } else if (values.description.length > 500) {
        errors.description = "Portfolio description can have maximum 500 characters!";
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
                      onChange={categoriesChangeHandler}
                      className={`${modalWrapper}__modal-content__text-content__category__selectDropdown`}
                    />
                    {formHandler.errors.categories && <ErrorMessage error={formHandler.errors.categories}/>}
                  </div>
                  <TextField
                    variant="outlined"
                    value={formHandler.values.title}
                    name="title"
                    onChange={formHandler.handleChange}
                    className={`${modalWrapper}__modal-content__text-content__title__input`}
                  />
                  {formHandler.errors.title && <ErrorMessage error={formHandler.errors.title}/>}
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
                    {formHandler.errors.description && <ErrorMessage error={formHandler.errors.description}/>}
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
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}
      />}
    </div>
  );
})

const mapStateToProps = (state) => ({
  categoriesData: state.portfolios.allCategories
});

const mapDispatchToProps = (dispatch) => ({
  updatePortfolio: (portfolio) => dispatch(updatePortfolio(portfolio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioModal);
