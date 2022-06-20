import {Grid, Paper} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../../styles/FontAwesomeIcons";
import EditButton from "../../../../lib/editButton";
import RemoveButton from "../../../../lib/removeButton";

const Feature = ({feature, classes}) => {
  const {iconName, title, description} = feature;
  return (
    <Grid item xs={12} md={6} lg={4} className={`${classes.featureWrapper}__item`}>
        <a>
          <Paper elevation={3} className={`${classes.featureWrapper}__feature`}>
            <div className={`${classes.featureWrapper}__feature-wrapper`}>
              <div className={`${classes.featureWrapper}__feature-wrapper__action-btn`}>
                <EditButton/>
                <RemoveButton/>
              </div>
              <Icon className={`${classes.featureWrapper}__feature__icon ${FontAwesomeIcons[iconName]}`}/>
              <div className={`${classes.featureWrapper}__feature__content`}>
                <h1 className={`${classes.featureWrapper}__feature__content__title`}>{title}</h1>
                <p className={`${classes.featureWrapper}__feature__content__description`}>{description}</p>
              </div>
            </div>
          </Paper>
        </a>
    </Grid>
  );
}

export default Feature;
