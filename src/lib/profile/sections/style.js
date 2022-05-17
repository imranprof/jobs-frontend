import {makeStyles} from "@material-ui/core/styles";

import FONTS from "../../../../styles/fonts";

const useStyles = makeStyles({
    sectionHeaderWrapper: theme => ({
        '&__subtitle': {
            display: "block",
            color: theme.palette.customColor.highContrast,
            fontSize: 14,
            fontFamily: FONTS.primaryFont,
            fontWeight: 500,
            letterSpacing: 1,
            lineHeight: "14px",
            textTransform: "uppercase",
            marginBottom: 10
        },
        '&__title': {
            color: theme.palette.customColor.main,
            fontSize: 60,
            fontFamily: FONTS.primaryFont,
            fontWeight: 700,
            lineHeight: "50px",
            textTransform: "capitalize",
            marginTop: 15,
        },
        '&--left': {
            textAlign: "left"
        },
        '&--center': {
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            '&--left': {
                textAlign: "center"
            },
        },
        [theme.breakpoints.down('sm')]: {
            '&__title': {
                fontSize: 38
            },
        },
    })
});

export function SectionStyle(theme) {
    return useStyles(theme);
}
