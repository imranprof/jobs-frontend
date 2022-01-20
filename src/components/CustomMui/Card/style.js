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
            }
        }
    })
});

export function CardStyle(theme) {
    return useStyles(theme);
}
