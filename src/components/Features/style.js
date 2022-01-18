import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../styles/fonts";

const useStyles = makeStyles({
    featureWrapper: theme => ({
        display: "flex",
        '&__item': {
            width: "100%",
            display: "flex",
            '& a': {
                width: "93%",
                height: 340,
                textDecoration: "none",
                marginBottom: 50
            },
        },
        '&__feature': {
            position: "relative",
            height: "100%",
            textAlign: "left",
            background: theme.palette.customBackground.gradiant.light,
            boxShadow: theme.palette.customShadow.default,
            padding: "50px 50px 35px 50px",
            borderRadius: 10,
            transition: "0.5s all ease-in-out",
            zIndex: 1,
            '&__icon': {
                fontSize: 40,
                color: theme.palette.customColor.highContrast,
                marginBottom: 29,
                overflow: "visible",
            },
            '&__content': {
                '&__title': {
                    color: theme.palette.customColor.main,
                    fontSize: 24,
                    fontWeight: 500,
                    fontFamily: FONTS.secondaryFont,
                    lineHeight: "32px",
                    letterSpacing: 1,
                    textTransform: "capitalize",
                    marginTop: 0,
                },
                '&__description': {
                    color: theme.palette.customColor.main,
                    fontSize: 16,
                    fontFamily: FONTS.secondaryFont,
                    lineHeight: "28px",
                    marginBottom: 22
                },
                '&__read-more-btn': {
                    height: 0,
                    opacity: 0,
                    // visibility: "hidden",
                    color: theme.palette.customColor.highContrast,
                    transition: "all 0.4s ease 0s",
                },
                '&:hover > &__read-more-btn': {
                    height: 100,
                    opacity: 1,
                }
            },
            '&-wrapper': {
                    transition: "transform 0.4s",
                '&:hover': {
                    transform: "translateY(-20px)"
                }
            }
        },
    })
});

export function FeatureStyle(theme) {
    return useStyles(theme);
}
