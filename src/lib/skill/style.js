import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  skillWrapper: theme => ({
    display: "inline-table",
    width: "auto",
    height: 10,
    background: theme.palette.customBackground.skillBackground,
    padding: "0 5px 2px 5px",
    borderRadius: 5,
    margin: 3,
    '& span': {
      fontSize: 11
    }
  })
});

export function SkillStyle(theme) {
  return useStyles(theme);
}
