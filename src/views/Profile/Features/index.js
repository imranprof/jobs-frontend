import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import Feature from "./components/feature";
import {FeatureStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getFeaturesAction, removeFeatureAction} from "../../../store/actions/featureActions";
import AddButton from "../../../lib/addButton";
import EditCustomModal from "../../../lib/profile/editCustomModal";
import FeaturesAdd from "../AddComponents/features/components/featuresAdd";

const Features = (props) => {
  const theme = useTheme();
  const classes = FeatureStyle(theme);
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const {features, userID} = props;
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false);

  const modalClose = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    userID && dispatch(getFeaturesAction({id: userID}))
  }, [])

  const featureRemoveHandler = (item) => {
    if (props.features.length > 1) {
      userID && dispatch(removeFeatureAction(item.id))
      setToast({show: true, severity: "success", text: "Successfully deleted the feature!"});
    } else {
      setToast({show: true, severity: "error", text: "You must have at least one feature!"});
    }
  }

  return (
    <>
      <div onClick={() => setOpenModal(true)} className={`${classes.featureWrapper}__btn`}>
        <AddButton tooltipTitle="Add feature" />
      </div>
      <Grid container spacing={3} className={classes.featureWrapper} id="features">
        {features.map(feature => (
            <Feature
              key={feature.id}
              feature={feature}
              featureRemove={featureRemoveHandler}
              toast={toast}
              setToast={setToast}
              classes={classes}
            />
          )
        )}
      </Grid>
      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }

      <EditCustomModal handleClose={modalClose} open={openModal}>
        <FeaturesAdd handleClose={modalClose} toast={toast} setToast={setToast} />
      </EditCustomModal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userID: state.auth.userID,
    features: state.features.allFeatures
  }
}

export default connect(mapStateToProps)(Features);
