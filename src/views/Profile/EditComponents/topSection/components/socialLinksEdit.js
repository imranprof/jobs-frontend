import {connect} from "react-redux";
import {useFormik} from "formik";

import {useTheme} from "@material-ui/core/styles";

import SocialLinksEditWrapper from "./socialLinksEditWrapper";
import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import CustomButton from "../../../../../lib/customButtons";
import {TopSectionEditStyle} from "../style";
import {socialLinksUpdate} from "../../../../../store/actions/editProfileActions";

const SocialLinksEdit = (props) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const {handleClose} = props;

  const formik = useFormik({
    initialValues: props.links,
    onSubmit: values => {
      props.setLinks(values);
      handleClose(true)
    }
  })

  return (
    <div>
      <form className={`${classes.topSectionEditWrapper}__socialLinks`}>
        <SocialLinksEditWrapper name="facebook" iconName={FontAwesomeIcons.facebook} urlValue={formik.values.facebook} changeHandler={formik.handleChange} />
        <SocialLinksEditWrapper name="github" iconName={FontAwesomeIcons.github} urlValue={formik.values.github} changeHandler={formik.handleChange} />
        <SocialLinksEditWrapper name="linkedin" iconName={FontAwesomeIcons.linkedin} urlValue={formik.values.linkedin} changeHandler={formik.handleChange} />
      </form>
      <CustomButton handler={formik.handleSubmit} mode={handleClose}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    links: state.editProfile.links,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLinks: (values) => dispatch(socialLinksUpdate(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SocialLinksEdit);
