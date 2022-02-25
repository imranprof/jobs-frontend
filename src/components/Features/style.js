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
            boxShadow: theme.palette.customShadow.featureShadow,
            borderRadius: 10,
            zIndex: 1,
            '&::before': {
                position: "absolute",
                content: '""',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                transition: "all 0.5s ease-in-out",
                opacity: 0,
                background: theme.palette.customBackground.gradiant.dark,
                borderRadius: 10,
            },
            '&:hover::before': {
                opacity: 1,
                background: theme.palette.customBackground.gradiant.dark,
            },
            '&:hover &__icon': {
                color: theme.palette.customColor.featureIconHover
            },
            '&:hover &__content__read-more-btn': {
                color: theme.palette.customColor.featureIconHover,
                height: 50,
                opacity: 1,
            },
            '&:hover &__content__title, &:hover &__content__description': {
                color: theme.palette.customColor.featuresHover
            },
            '&:hover &-wrapper': {
                transform: "translateY(-10px)",
            },
            '&__icon': {
                fontSize: 40,
                color: theme.palette.customColor.highContrast,
                marginBottom: 29,
                overflow: "visible",
                transition: "color 0.4s ease 0s",
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
                height: "100%",
                padding: "50px 50px 35px 50px",
                transition: "all 0.4s ease 0s",
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
