import {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import {useFormik} from "formik";

import {useTheme} from "@material-ui/core/styles";

import ErrorMessage from "../../errorMessage";
import CustomButton from "../customButtons";
import EditButton from "../../editButton";
import {locationEditMode, locationUpdateAction,} from "../../../store/actions/contactActions";
import {LocationStyle} from "./style";

const Location = (props) => {
  const theme = useTheme();
  const classes = LocationStyle(theme);
  const dispatch = useDispatch()
  const {profileID, location, locationMode, setLocationMode, setToast, editPermission} = props;
  const getLocation = location?.split(",")
  const getCountry = (getLocation[1])?.trim()
  const getRegion = getLocation[0]?.trim()
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(()=>{
    if (getCountry !== '' && getRegion !== '') {
      setCountry(getCountry)
      setRegion(getRegion)
    }
  },[getCountry, getRegion])

  const locationHandler = useFormik({
    initialValues: {
      location: `${region}, ${country}`
    },
    onSubmit: values => {
      dispatch(locationUpdateAction(profileID, values.location))
      props.setLocationMode(false);
      setToast({show: true, severity: "success", text: "Successfully updated the location"});
    },
    enableReinitialize: true,
    validate: values => {
      let errors = {}
      if (country === "") {
        errors.location = "Country can't be empty"
      }
      if (region === "") {
        errors.location = "Region can't be empty"
      }
      return errors;
    }
  })

  return (
    <div>
      {locationMode ? (
        <div>
          <div className={classes.locationWrapper}>
            <CountryDropdown
              name='location'
              value={country}
              onChange={(val) => setCountry(val)}
              classes={`${classes.locationWrapper}__location`}
            />
            <RegionDropdown
              name='location'
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              classes={`${classes.locationWrapper}__location`}
            />
          </div>
          {locationHandler.errors.location ?
            <ErrorMessage error={locationHandler.errors.location}/> : null}
          <CustomButton handler={locationHandler.handleSubmit} mode={() => setLocationMode(false)}/>
        </div>
      ) : (
        <div className={classes.locationWrapper}>
              <span className={`${classes.locationWrapper}__location-text`}>
                Location: {location}
              </span>
          {editPermission &&
          <span onClick={() => props.setLocationMode(true)}>
                <EditButton/>
              </span>
          }
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profileID: state.topSection.id,
    location: state.contacts.location,
    locationMode: state.contacts.locationMode,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLocationMode: (boolean) => dispatch(locationEditMode(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
