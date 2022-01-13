import {makeStyles} from "@material-ui/core/styles";
import COLORS from "../../../styles/colors";

export const useStyles = makeStyles({
    footerWrapper: theme => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: '26px 56px 0 56px',
        '&__logo': {
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: COLORS.white,
            borderRadius: "50%",
            marginTop: 20,
        },
        '&__logo-img': {
            width: 40,
            height: 40,
        },
        '&__description': {
            fontSize: 17,
            color: theme.palette.customColor.main,
            fontFamily: "Poppins, sans-serif"
        },
        '&__link': {
            textDecoration: "none",
            color: theme.palette.customColor.main,
            display: "inline-block",
            paddingBottom: 2,
            backgroundImage: theme.palette.customBackground.gradiant.highContrast,
            backgroundPosition: "0 100%",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.4s, background-position 0s 0.4s, color 0.4s, ease 0s",
            '&:hover': {
                color: COLORS.pink,
                backgroundPosition: "0 100%",
                backgroundSize: "100% 1px"
            }
        }
    })
});

export function FooterStyle(theme) {
    return useStyles(theme);
}
