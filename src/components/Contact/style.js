import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
    contactWrapper: theme => ({
        justifyContent: "space-between",
        '&__contact-info': {
            background: theme.palette.customBackground.gradiant.light,
            maxWidth: 545,
            height: "100%",
            borderRadius: 20,
            boxShadow: theme.palette.customShadow.default,
            padding: 30,
            marginTop: 30,
            '&__image-wrapper': {
                width: 485,
                height: 280,
                borderRadius: 10,
                overflow: "hidden"
            },
            '&__image': {
                width: "100%",
                height: "100%",
                borderRadius: 10,
                transition: "all 0.4s ease",
            },
            '&:hover &__image': {
                transform: "scale(1.1)"
            },
            '&__title-area': {
                marginBottom: 15,
                '&__name': {
                    color: theme.palette.customColor.light,
                    fontFamily: FONTS.primaryFont,
                    fontSize: 29,
                    lineHeight: "44px",
                    marginBottom: 9
                },
                '&__designation': {
                    color: theme.palette.customColor.dark,
                    fontFamily: FONTS.secondaryFont,
                    fontSize: 18,
                    lineHeight: 1.5,
                    marginTop: 0
                }
            },
            '&__description-area': {
                marginBottom: 38,
            },
            '&__description': {
                fontSize: 18,
                fontWeight: 400,
                color: theme.palette.customColor.dark,
                fontFamily: FONTS.secondaryFont,
                lineHeight: "30px",
                display: "inline-block",
                margin: "0 0 20px 0"
            },
            '&__phone, &__email': {
                fontSize: 18,
                fontWeight: 400,
                color: theme.palette.customColor.dark,
                fontFamily: FONTS.secondaryFont,
                lineHeight: "30px",
                display: "block",
                margin: 0,
                '& a': {
                    color: theme.palette.customColor.main,
                    textDecoration: "none",
                    display: "inline-block",
                    backgroundImage: theme.palette.customBackground.gradiant.highContrast,
                    backgroundPosition: "0 100%",
                    backgroundSize: "0% 1px",
                    backgroundRepeat: "no-repeat",
                    transition: "background-size 0.4s, background-position 0.4s, color 0.4s, ease 0s",
                    '&:hover': {
                        color: theme.palette.customColor.highContrast,
                        backgroundPosition: "0 100%",
                        backgroundSize: "100% 1px"
                    }
                }
            }
        },
    })
});

export function ContactStyle(theme) {
    return useStyles(theme);
}
