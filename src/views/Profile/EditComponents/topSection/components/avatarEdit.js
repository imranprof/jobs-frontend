import {useState} from "react";
import {connect, useDispatch} from "react-redux";

import {useTheme} from "@material-ui/core/styles";

import CustomButtons from "../../../../../lib/profile/customButtons";
import {TopSectionEditStyle} from "../style";
import {uploadAvatar} from "../../../../../store/actions/topSectionActions";
import EditModalDivider from "../../../../../lib/profile/editModalDivider";
import ModalTitle from "../../../../../lib/profile/modalTitle";
import CustomUploadImage from "../../../../../lib/profile/customUploadImage";

const AvatarEdit = (props) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const {avatar, firstName, lastName, handleClose, profileID, setToast} = props;
  const [image, setImage] = useState('')
  const dispatch = useDispatch()

  const convertToBase64 = (file) => {
    return new Promise((resolve => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
    }));
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleImageUpload = async () => {
    if (image) {
      dispatch(uploadAvatar({
        base64Image: await convertToBase64(image),
        profileID: profileID
      }));
      handleClose();
      setToast({show: true, severity: "success", text: "Successfully updated the profile photo"});
    } else {
      setToast({show: true, severity: "error", text: "Please choose or upload a photo"});
    }
  }

  return (
    <div>
      <ModalTitle title="Profile photo" />
      <EditModalDivider />

      <p className={`${classes.topSectionEditWrapper}__avatarWrapper__message`}>
        {`${firstName}, help others recognize you!`}
      </p>

      <div className={`${classes.topSectionEditWrapper}__avatarWrapper`}>
        <img
          src={(image === '') ? avatar : URL.createObjectURL(image)}
          alt={`${firstName} ${lastName}`}
          className={`${classes.topSectionEditWrapper}__avatarWrapper__image`}
        />
      </div>

      <CustomUploadImage changeHandler={handleImageChange} selectedImage={image} />

      <EditModalDivider />
      <CustomButtons handler={handleImageUpload} mode={handleClose}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileID: state.topSection.id,
    avatar: state.topSection.avatar,
  }
}

export default connect(mapStateToProps)(AvatarEdit);
