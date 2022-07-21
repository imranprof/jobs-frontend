import {connect, useDispatch} from "react-redux";
import {useFormik} from "formik";

import {useTheme} from "@material-ui/core/styles";

import SocialLinksEditWrapper from "./socialLinksEditWrapper";
import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import CustomButton from "../../../../../lib/profile/customButtons";
import {TopSectionEditStyle} from "../style";
import {socialLinksUpdateAction} from "../../../../../store/actions/topSectionActions";
import ErrorMessage from "../../../../../lib/errorMessage";

const SocialLinksEdit = (props) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const {handleClose, setToast, profileID} = props;
  const dispatch = useDispatch();

  const updateLinks = values => {
    dispatch(socialLinksUpdateAction({
      socialLinks: values,
      profileID: profileID
    }));
    setToast({show: true, severity: "success", text: "Successfully updated the social links"});
    handleClose(true)
  }

  const validateLinks = values => {
    let errors = {}
    delete values.id;
    let isEmpty = Object.values(values).every(x => x === null || x === "" || x === undefined);
    if (isEmpty) {
      errors.values = "please fill out at least one field"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: props.links,
    onSubmit: updateLinks,
    validate: validateLinks
  })

  return (
    <div>
      <h3>Edit social links</h3>
      <form className={`${classes.topSectionEditWrapper}__socialLinks`}>
        <SocialLinksEditWrapper
          name="facebook"
          iconName={FontAwesomeIcons.facebook}
          urlValue={formik.values.facebook}
          changeHandler={formik.handleChange}
        />
        <SocialLinksEditWrapper
          name="github"
          iconName={FontAwesomeIcons.github}
          urlValue={formik.values.github}
          changeHandler={formik.handleChange}
        />
        <SocialLinksEditWrapper
          name="linkedin"
          iconName={FontAwesomeIcons.linkedin}
          urlValue={formik.values.linkedin}
          changeHandler={formik.handleChange}
        />
        {formik.errors.values ? <ErrorMessage error={formik.errors.values}/> : null}
      </form>
      <CustomButton handler={formik.handleSubmit} mode={handleClose}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileID: state.topSection.id,
    links: state.topSection.links,
  }
}

export default connect(mapStateToProps)(SocialLinksEdit);
