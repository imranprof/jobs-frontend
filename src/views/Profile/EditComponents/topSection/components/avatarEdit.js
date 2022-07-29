import {useState} from "react";
import {connect, useDispatch} from "react-redux";

import Button from "@material-ui/core/Button";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../../../../styles/FontAwesomeIcons";
import CustomButtons from "../../../../../lib/profile/customButtons";
import {TopSectionEditStyle} from "../style";
import {uploadAvatar} from "../../../../../store/actions/topSectionActions";

const AvatarEdit = (props) => {
  const theme = useTheme();
  const classes = TopSectionEditStyle(theme);
  const {avatar, firstName, lastName, handleClose, profileID} = props;
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

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleImageUpload = async () => {
    dispatch(uploadAvatar({
      base64Image: await convertToBase64(image),
      profileID: profileID
    }));
    handleClose();
  }

  return (
    <div>
      <h3>Change profile photo</h3>

      <div className={`${classes.topSectionEditWrapper}__avatarWrapper`}>
        <img
          src={(image === '') ? avatar : URL.createObjectURL(image)}
          alt={`${firstName} ${lastName}`}
          className={`${classes.topSectionEditWrapper}__avatarWrapper__image`}
        />
      </div>

      <div style={{display: "flex"}}>
        <input
          type="file"
          accept="image/*"
          id="upload-image-file"
          onChange={handleChange}
          className={`${classes.topSectionEditWrapper}__avatarWrapper__image__input`}
        />
        <label htmlFor="upload-image-file">
          <Button
            variant="outlined"
            color="primary"
            component="span"
            startIcon={<i className={FontAwesomeIcons.camera}/>}
            className={`${classes.topSectionEditWrapper}__avatarWrapper__image__upload`}
          >
            Upload
          </Button>
        </label>
        <p>{image.name}</p>

      </div>
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
