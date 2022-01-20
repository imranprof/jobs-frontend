import {makeStyles} from "@material-ui/core/styles";
import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
    cardWrapper: theme => ({
        background: theme.palette.customBackground.gradiant.light,
        maxWidth: 400,
        height: "100%",
        borderRadius: 20,
        boxShadow: theme.palette.customShadow.default,
        padding: 30,
        marginTop: 40,
        '&__image': {
            width: 340,
            height: 260,
            borderRadius: 10,
            objectFit: "cover",
            zIndex: -1
        },
        '&__content': {
            padding: "18px 0 0 0 !important", // Override MUI CardContent component
        },
        '&__category-info': {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10,
            '&__category': {
                '& a': {
                    textDecoration: "none",
                    textTransform: "uppercase",
                    color: theme.palette.customColor.highContrast,
                    fontSize: 12,
                    fontFamily: FONTS.secondaryFont
                }
            },
            '&__react-count': {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: theme.palette.customColor.main,
                fontSize: 13,
                fontFamily: FONTS.secondaryFont,
                fontWeight: 500,
            },
            '&__react': {
                color: theme.palette.customColor.main,
                fontSize: 13,
                marginRight: 5,
                cursor: "pointer",
                transition: "color 0.4s ease",
                '&:hover': {
                    color: theme.palette.customColor.highContrast
                }
            },
        },
        '&__title': {
            fontFamily: FONTS.primaryFont,
            margin: 0,
            '&__link': {
                display: "inline-block",
                color: theme.palette.customColor.main,
                fontSize: 23,
                fontWeight: 600,
                textDecoration: "none",
                lineHeight: "34px",
                transition: "all 0.4s ease",
                '&__arrow': {
                    color: theme.palette.customColor.highContrast,
                    top: 3,
                    marginLeft: 6,
                    transform: "rotate(-45deg)",
                    transition: "all 0.4s ease",
                    opacity: 0,
                    fontSize: 0
                },
                '&:hover': {
                    color: theme.palette.customColor.highContrast,
                },
                '&:hover > &__arrow': {
                    opacity: 1,
                    fontSize: 20
                }
            },

        },
    })
});

export function CardStyle(theme) {
    return useStyles(theme);
}
