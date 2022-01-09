import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    footerWrapper: theme => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        '&__divider': {
            width: "100%",
            background: "#111"
        },
        '&__logo': {
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            borderRadius: "50%",
            marginTop: 20,
        },
        '&__logo-img': {
            width: 40,
            height: 40,
        },
        '&__description': {
            fontSize: 17,
            color: "#878e99",
            fontFamily: "Poppins, sans-serif"
        },
        '&__link': {
            textDecoration: "none",
            color: theme.palette.primary.main,
            display: "inline-block",
            paddingBottom: 2,
            backgroundImage: "linear-gradient(#FF014F, #FF014F)",
            backgroundPosition: "0 100%",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.4s, background-position 0s 0.4s, color 0.4s, ease 0s",
            '&:hover': {
                color: "#FF014F",
                backgroundPosition: "0 100%",
                backgroundSize: "100% 1px"
            }
        }
    })
});

export function FooterStyle(theme) {
    return useStyles(theme);
}
