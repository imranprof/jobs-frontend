import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  skillsWrapper: theme => ({
    display: "flex",
    '&__title': {
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 2,
      fontWeight: 300,
      color: theme.palette.customColor.main,
      display: "inline-block",
      marginBottom: 20,
      [theme.breakpoints.down('xs')]: {
        fontSize: 13
      },
    },
    '&__skills': {
      display: "flex",
      '& a': {
        textDecoration: "none",
        transition: "transform .4s ease",
        '&:hover': {
          transform: "translateY(-3px)",
        },
      },
      '&__paper': {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        background: theme.palette.customBackground.gradiant.light,
        boxShadow: theme.palette.customShadow.main,
        width: 60,
        height: 60,
        marginRight: 25,
        '&--icon': {
          color: theme.palette.customColor.main,
        },
        '&--img': {
          maxHeight: 34,
        },
        [theme.breakpoints.down('sm')]: {
          '&--img': {
            maxHeight: 30,
          },
        },
        [theme.breakpoints.down('md')]: {
          width: 50,
          height: 50,
          marginRight: 20,
        },
      },
      '&__editBtnWrapper': {
        height: "fit-content"
      }
    },
  })
});

export function SkillsStyle(theme) {
  return useStyles(theme);
}
