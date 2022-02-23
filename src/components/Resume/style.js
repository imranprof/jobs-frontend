import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
        resumeWrapper: theme => ({
            display: "flex",
            flexWrap: "wrap",
            marginTop: 45,
            marginRight: -15,
            marginLeft: -15,
            // ========= Breakpoints =========
            [theme.breakpoints.between(960, 990)]: {
                maxWidth: "75%",
                margin: "auto"
            },
            '&__body': {
                paddingLeft: 15,
                paddingRight: 15,
                width: "100%",
                '& .MuiList-padding': {
                    paddingTop: 0,
                    paddingBottom: 0,
                }
            },
            '&__nav-list': {
                display: "flex",
                flexDirection: "row",
                marginTop: 16,
                borderRadius: 10,
                background: theme.palette.customBackground.gradiant.light,
                boxShadow: theme.palette.customShadow.default,
                // ========= Breakpoints =========
                [theme.breakpoints.down(767)]: {
                    flexDirection: "column",
                },
                '& .Mui-selected': {
                    background: "transparent",
                    boxShadow: theme.palette.customShadow.default,
                    borderRadius: 10,
                    '& a': {
                        color: theme.palette.customHoverColor.main,
                    },
                    '&:hover': {
                        background: "transparent",
                        boxShadow: theme.palette.customShadow.default,
                        borderRadius: 10,
                    },
                },
                '&__item': {
                    padding: 0,
                    height: 86,
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all .5s ease-in-out",
                    // ========= Breakpoints =========
                    [theme.breakpoints.down(767)]: {
                        height: 64,
                    },
                    '&:hover': {
                        boxShadow: theme.palette.customShadow.default,
                        borderRadius: 10,
                        '& a': {
                            color: theme.palette.customHoverColor.main,
                        }
                    },
                    '& a': {
                        color: theme.palette.customColor.main,
                        fontFamily: FONTS.secondaryFont,
                        fontSize: 18,
                        fontWeight: 500,
                        textTransform: "capitalize",
                        textDecoration: "none",
                        borderRadius: 10,
                        transition: "all .5s ease-in-out",
                    }
                }
            },
        })
    })
;

export function ResumeStyle(theme) {
    return useStyles(theme);
}
