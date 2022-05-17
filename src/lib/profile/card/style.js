import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
    cardWrapper: theme => ({
        position: "relative",
        background: theme.palette.customBackground.gradiant.light,
        maxWidth: 400,
        height: "100%",
        borderRadius: 20,
        boxShadow: theme.palette.customShadow.paperCardShadow,
        padding: 30,
        marginTop: 30,
        zIndex: 1,
        '&::before': {
            position: "absolute",
            content: '""',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            transition: "opacity 0.5s ease-in-out",
            opacity: 0,
            background: theme.palette.customBackground.gradiant.cardHover,
        },
        '&__image-wrapper': {
            width: 340,
            height: 260,
            borderRadius: 10,
            overflow: "hidden"
        },
        '&__image': {
            width: "100%",
            height: "100%",
            borderRadius: 10,
            transition: "all 0.4s ease",
        },
        '& .MuiCardContent-root': {
            padding: "18px 0 0 0",
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
            '&__icon-wrapper': {
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
                    width: 30,
                    color: theme.palette.customColor.highContrast,
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
            [theme.breakpoints.down('xs')]: {
                '&__link': {
                    fontSize: 18,
                    lineHeight: "28px",
                }
            },
        },
        '&:hover::before': {
            opacity: 1
        },
        '&:hover &__image': {
            transform: "scale(1.1)"
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 320,
            padding: 20,
            '&__image-wrapper': {
                width: 280,
                height: 200,
            }
        },
    })
});

export function CardStyle(theme) {
    return useStyles(theme);
}
