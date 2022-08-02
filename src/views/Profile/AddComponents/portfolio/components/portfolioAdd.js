import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import Select from "react-select";
import {useFormik} from "formik";

import {Grid, IconButton, TextField} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import CloseIcon from "@material-ui/icons/Close";

import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import {PortfolioAddStyle} from "../style";
import CustomButton from "../../../../../lib/profile/customButtons";
import ErrorMessage from "../../../../../lib/errorMessage";
import {addPortfolioAction} from "../../../../../store/actions/portfolioActions";
import CustomUploadImage from "../../../../../lib/profile/customUploadImage";

const PortfolioAdd = (props => {
  const theme = useTheme();
  const portfolioAddWrapper = PortfolioAddStyle(theme).portfolioAddWrapper;
  const [slidingClass, SetSlidingClass] = useState("");
  const {categoriesData, setTogglePortfolioModal, setToast} = props;
  const dispatch = useDispatch();
  const [newImage, setNewImage] = useState('');

  setTimeout(() => {
    SetSlidingClass(setTogglePortfolioModal ? `${portfolioAddWrapper}__modal-content--visible` : "")
  }, 1);

  const convertToBase64 = (file) => {
    return new Promise((resolve => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
    }));
  }

  const handleImageUpload = async () => {
    let base64Image = await convertToBase64(newImage);
    return base64Image;
  }

  const handleImageChange = (e) => {
    if(e.target.files[0]){
      setNewImage(e.target.files[0])
    }
  }

  const mapCategoriesForMultiSelect = (categories) => categories?.map((category) => ({
    value: category.id,
    label: category.title
  }));

  const mapCategoriesForState = (categories) => categories?.map((category) => ({
    category_id: category.value,
  }));

  const addPortfolio = ({title, categories, description, image}) => {
    dispatch(addPortfolioAction({title, categories, description, image}));
    setTogglePortfolioModal(false);
    setToast({show: true, severity: "success", text: "Successfully created the portfolio."});
  }

  const categoriesChangeHandler = categories => {
    formHandler.setValues({
      categories: categories,
      description: formHandler.values.description,
      title: formHandler.values.title
    })
  }

  const formHandler = useFormik({
    initialValues: {
      categories: [],
      title: "",
      description: "",
    },
    onSubmit: async (values) => {
      addPortfolio({
        title: values.title,
        description: values.description,
        categories: mapCategoriesForState(values.categories),
        image: (!newImage) ? null : await handleImageUpload()
      });
    },
    onReset: () => {
      setTogglePortfolioModal(false);
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

  return (
    <div className={`${portfolioAddWrapper}__body`}>
      <div className={`${portfolioAddWrapper}__dialog`}>
        <div className={`${portfolioAddWrapper}__modal-content ${slidingClass}`}>
          <IconButton className={`${portfolioAddWrapper}__modal-content__close-icon`}
                      onClick={() => {
                        setTogglePortfolioModal(false)
                      }}>
            <CloseIcon/>
          </IconButton>
          <Grid container>
            <Grid item md={6} className={`${portfolioAddWrapper}__modal-content__image-container`}>
              <div>
                <img
                  className={`${portfolioAddWrapper}__modal-content__image-container__image`}
                  src={(newImage === '') ? "portfolio-01.jpg" : URL.createObjectURL(newImage)}
                  alt="image"
                />
                <CustomUploadImage  changeHandler={handleImageChange} selectedImage={newImage}/>
              </div>

            </Grid>
            <Grid item md={6} className={`${portfolioAddWrapper}__modal-content__text-content`}>
              <div className={`${portfolioAddWrapper}__modal-content__text-content__category`}>
                <h4>Select categories</h4>
                <Select
                  isMulti
                  name="categories"
                  options={mapCategoriesForMultiSelect(categoriesData)}
                  value={formHandler.values.categories}
                  onChange={categoriesChangeHandler}
                  className={`${portfolioAddWrapper}__modal-content__text-content__category__selectDropdown`}
                />
                {formHandler.errors.categories && <ErrorMessage error={formHandler.errors.categories}/>}
              </div>
              <TextField
                variant="outlined"
                value={formHandler.values.title}
                name="title"
                placeholder="Enter your project title"
                onChange={formHandler.handleChange}
                className={`${portfolioAddWrapper}__modal-content__text-content__title__input`}
              />
              {formHandler.errors.title && <ErrorMessage error={formHandler.errors.title}/>}
              <div>
                <TextField
                  value={formHandler.values.description}
                  name="description"
                  multiline
                  rows={5}
                  placeholder="Enter your project description"
                  InputProps={{disableUnderline: true}}
                  onChange={formHandler.handleChange}
                  className={`${portfolioAddWrapper}__modal-content__text-content__description__input`}
                />
                {formHandler.errors.description && <ErrorMessage error={formHandler.errors.description}/>}
              </div>

              <CustomButton handler={formHandler.handleSubmit} mode={formHandler.handleReset}
                            actionText="Add"/>
              <div
                className={`${portfolioAddWrapper}__modal-content__text-content__link-button-wrapper`}>
                <a
                  className={`${portfolioAddWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                  LIKE THIS
                  <Icon
                    className={`${FontAwesomeIcons.thumbsUp} ${portfolioAddWrapper}__modal-content__text-content__link-button-wrapper__link-button__thumbs-up-icon`}/>
                </a>
                <a
                  className={`${portfolioAddWrapper}__modal-content__text-content__link-button-wrapper__link-button`}>
                  VIEW PROJECT
                  <Icon
                    className={`${FontAwesomeIcons.angleRight} ${portfolioAddWrapper}__modal-content__text-content__link-button-wrapper__link-button__right-angular-icon`}/>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
})

const mapStateToProps = (state) => (
  {
    categoriesData: state.portfolios.allCategories
  }
);

export default connect(mapStateToProps)(PortfolioAdd);
