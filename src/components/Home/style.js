import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../styles/colors";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    homeWrapper: theme => ({
        '&__left': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            '&-top': {
                marginBottom: 142
            },
            '&-bottom': {
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                '&__title': {
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    fontWeight: 300,
                    color: theme.palette.customColor.main,
                    display: "inline-block",
                    marginBottom: 20
                },
                '&__social-links': {
                    display: "flex",
                    '& a':{
                        textDecoration: "none",
                    }
                }
            }
        },
        '&__paper': {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            background: theme.palette.customBackground.gradiant.light,
            width: 60,
            height: 60,
            marginRight: 25,
            '&--icon': {
                color: theme.palette.customColor.main,
            },
            '&--img': {
                maxHeight: 34,
            }
        },
        '&__headline': {
            fontSize: 14,
            fontFamily: FONTS.primaryFont,
            color: theme.palette.customColor.main,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 500,
            display: "block",
            marginBottom: 20
        },
        '&__title': {
            color: theme.palette.customColor.light,
            fontSize: 60,
            fontWeight: 700,
            fontFamily: FONTS.primaryFont,
            lineHeight: "75px",
            marginTop: 0,
            marginBottom: 22,
        },
        '&__name': {
            color: theme.palette.customColor.highContrast
        },
        '&__expertise': {
            display: "flex",
            alignItems: "center",
            fontSize: 48,
            fontWeight: 700,
            height: 58
        },
        '&__cursor': {
            borderRight: `2px solid ${theme.palette.customColor.main}`,
            padding: 3,
            height: 50,
            opacity: 0.5
        },
        '&__bio': {
            fontSize: 16,
            fontFamily: FONTS.secondaryFont,
            lineHeight: "30px",
            color: theme.palette.customColor.main,
            paddingRight: "16%",
            opacity: 0.9
        }
    })
});

export function HomeStyle(theme) {
    return useStyles(theme);
}
