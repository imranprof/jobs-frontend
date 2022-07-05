import {useState} from "react";

import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {ResumeStyle} from "../style";
import ColumnContent from "./columnContent";
import CustomSnackbar from "../../../../lib/customSnackbar";

const RowContent = ({cardType, cardData}) => {
  const theme = useTheme();
  const resumeWrapper = ResumeStyle(theme).resumeWrapper;
  const wrapperClass = cardType === "skills" ? "skills" : "content";
  const [toast, setToast] = useState({show: false, severity: "", text: ""})

  const columnWrapper = position => {
    return (
      <Grid key={position} item xs={6} className={`${resumeWrapper}__nav-content__row__column`}>
        <Grid container className={`${resumeWrapper}__nav-content__row__column__${wrapperClass}`}>
          <ColumnContent position={position} cardType={cardType} cardData={cardData} setToast={setToast}/>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid container className={`${resumeWrapper}__nav-content__row`}>
        {columnWrapper("left")}
        {columnWrapper("right")}
      </Grid>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }
    </>
  );
}

export default RowContent;
