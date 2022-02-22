import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
    blogModalWrapper: theme => ({
        '&__body': {
            position: "fixed",
            display: "block",
            background: theme.palette.customBackground.light,
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            outline: 0,
            padding: "60px 15px",
            zIndex: 99999999,
        },
        '&__dialog': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "14px auto",
            width: "100%",
            maxWidth: 1000,
            minHeight: "calc(100% - 3.5rem)",
        },
        '&__modal-content': {
            position: "relative",
            padding: 45,
            marginTop: -70,
            border: "none",
            borderRadius: 10,
            fontFamily: FONTS.secondaryFont,
            background: theme.palette.customBackground.gradiant.light,
            boxShadow: theme.palette.customShadow.default,
            transition: ".2s linear",
            // ========= Breakpoints =========
            [theme.breakpoints.down(767)]: {
                padding: 30,
            },
            [theme.breakpoints.down(479)]: {
                padding: "40px 15px 25px 15px",
            },
            '&--visible': {
                marginTop: 0,
            },
            '&__close-icon': {
                position: "absolute",
                top: 5,
                right: 6,
                background: theme.palette.customBackground.gradiant.light,
                color: theme.palette.customColor.dark,
                transition: ".3s ease",
                [theme.breakpoints.down(767)]: {
                    top: 2,
                    right: 9,
                },
                '&:hover': {
                    background: theme.palette.customHoverBackground.closeIcon,
                    color: theme.palette.customHoverColor.main,
                }
            },
            '& .MuiGrid-container': {
                padding: 10,
            },
            '&__image-container': {
                display: "flex",
                alignItems: "center",
                width: "100%",
                '& img': {
                    borderRadius: 10,
                    height: "auto",
                    width: "100%",
                    marginBottom: 30
                },
            },
            '&__text-content': {
                '& span': {
                    display: "block",
                    marginBottom: 9,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.palette.customColor.main
                },
                '& h2': {
                    marginTop: 20,
                    marginBottom: 40,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 32,
                    fontWeight: 700,
                    color: theme.palette.customColor.main
                },
                '& h4': {
                    marginBottom: 20,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 30,
                    fontWeight: 700,
                    color: theme.palette.customColor.main
                },
                '& p': {
                    marginBottom: 40,
                    fontSize: 16,
                    fontWeight: 400,
                    color: theme.palette.customColor.dark,
                    '&:last-child': {
                        marginBottom: 0,
                    }
                }
            }
        }
    })
});

export function BlogModalStyle(theme) {
    return useStyles(theme);
}