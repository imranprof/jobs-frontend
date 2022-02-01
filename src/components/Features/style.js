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
            [theme.breakpoints.down('xs')]: {
                height: 270,
                justifyContent: "center",
                marginBottom: 20,
                '& a': {
                    height: 260,
                    marginBottom: 0
                }
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
                    transition: "color 0.4s ease 0s",
                },
                '&__description': {
                    color: theme.palette.customColor.main,
                    fontSize: 16,
                    fontFamily: FONTS.secondaryFont,
                    lineHeight: "28px",
                    marginBottom: 22,
                    transition: "color 0.4s ease 0s",
                },
                '&__read-more-btn': {
                    height: 0,
                    opacity: 0,
                    color: theme.palette.customColor.highContrast,
                    transition: "all 0.4s ease 0s",
                },
                '&:hover > &__read-more-btn': {
                    height: 50,
                    opacity: 1,
                },
                '&:hover > &__title, &:hover > &__description': {
                    color: theme.palette.customColor.light
                },
                [theme.breakpoints.down('xs')]: {
                    '&__title': {
                        fontSize: 18,
                        marginBottom: 15,
                    },
                    '&__description': {
                        fontSize: 14,
                        lineHeight: "20px",
                        marginBottom: 15
                    },
                },
            },
            '&-wrapper': {
                transition: "all 0.4s ease 0s",
                '&:hover': {
                    transform: "translateY(-10px)"
                }
            },
            [theme.breakpoints.down('xs')]: {
                display: "flex",
                alignItems: "center",
                height: "100%",
                padding: "30px 30px 0 30px",
                '&__icon': {
                    fontSize: 30,
                    marginBottom: 20,
                },
            },
        },
    })
});

export function FeatureStyle(theme) {
    return useStyles(theme);
}
