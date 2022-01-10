import {makeStyles} from "@material-ui/core/styles";

import COLORS from "../../../styles/colors";
import FONTS from "../../../styles/fonts";

export const useStyles = makeStyles({
    homeWrapper: theme => ({
        margin: "30px 0",
        '&__left': {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        '&__headline': {
            fontSize: 14,
            fontFamily: FONTS.primaryFont,
            color: theme.palette.primary.main,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 500,
            display: "block",
            marginBottom: 20
        },
        '&__title': {
            color: theme.palette.secondary.main,
            fontSize: 60,
            fontWeight: 700,
            fontFamily: FONTS.primaryFont,
            lineHeight: "75px",
            marginTop: 0,
            marginBottom: 22,
        },
        '&__name': {
            color: COLORS.pink
        },
        '&__expertise': {
            display: "flex",
            alignItems: "center",
            fontSize: 54,
            fontWeight: 700,
            height: 58
        },
        '&__cursor': {
            borderRight: "2px solid #C1CCDB",
            padding: 3,
            height: 50,
            opacity: 0.5
        },
        '&__bio': {
            fontSize: 16,
            fontFamily: FONTS.secondaryFont,
            lineHeight: "30px",
            color: theme.palette.primary.main,
            paddingRight: "16%",
            opacity: 0.9
        }
    })
});

export function HomeStyle(theme) {
    return useStyles(theme);
}