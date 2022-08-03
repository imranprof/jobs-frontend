import Button from "@material-ui/core/Button";
import {useTheme} from "@material-ui/core/styles";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import {CustomUploadImageStyle} from "./style";

const CustomUploadImage = ({changeHandler, selectedImage}) => {
  const theme = useTheme();
  const classes = CustomUploadImageStyle(theme);

  return (
    <div className={classes.customUploadImageWrapper}>
      <input
        type="file"
        accept="image/*"
        id="upload-image-file"
        onChange={changeHandler}
        className={`${classes.customUploadImageWrapper}__input`}
      />
      <label htmlFor="upload-image-file">
        <Button
          variant="outlined"
          color="primary"
          component="span"
          startIcon={<i className={FontAwesomeIcons.camera}/>}
          className={`${classes.customUploadImageWrapper}__upload-btn`}
        >
          Upload
        </Button>
      </label>

      {selectedImage ?
        (<p className={`${classes.customUploadImageWrapper}__uploaded-msg`}>
          <i className="fa-solid fa-circle-check"/> Uploaded successfully
        </p>) :
        (<p className={`${classes.customUploadImageWrapper}__uploaded-msg__init`}>
          Choose or upload a photo
        </p>)
      }
    </div>
  );
};

export default CustomUploadImage;
