import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const lightTheme = createTheme({
    palette: {
        type: "light",
        background: {
            default: COLORS.white_1
        },
        customBackground: {
            main: COLORS.white,
            light: COLORS.white_1,
            dark: COLORS.white_2,
            gradiant: {
                light: COLORS.white_3,
                dark: COLORS.pink_1,
                highContrast: COLORS.pink_1,
            },
            sideBar: COLORS.white_1
        },
        customColor: {
            main: COLORS.gray,
            light: COLORS.gray,
            dark: COLORS.black,
            highContrast: COLORS.pink,
        },
        customShadow: {
            main: COLORS.boxShadow_2,
            light: COLORS.boxShadow_5,
            default: COLORS.boxShadow_6
        },
        customDivider: {
            main: COLORS.gray_5
        },
        customHoverColor: {
            main: COLORS.white
        },
        customHoverBackground: {
            main: COLORS.pink_1,
            closeIcon: COLORS.pink_1,
        },
        beforeBackground: {
            main: COLORS.gray_5
        },
        beforeShadow: {
            main: COLORS.boxShadow_8,
        },
        afterBackground: {
            main: COLORS.white_1
        },
        customBorder: {
            beforeElement: COLORS.gray_5,
        },
        resume: {
            navListColor: COLORS.black,
            navListShadow: COLORS.boxShadow_9,
            navListTitle: COLORS.pink,
            mainTitle: COLORS.black,
            subTitle: COLORS.pink_2,
            cardBeforeBG: COLORS.pink_1,
            cardShadow: COLORS.boxShadow_9,
            cardTitle: COLORS.black,
            cardSubTitle: COLORS.gray,
            cardDescription: COLORS.gray,
            cardDivider: COLORS.white_7,
            hover: {
                cardTitle: COLORS.black,
                cardSubTitle: COLORS.white,
                cardDescription: COLORS.white,
                cardDivider: COLORS.pink_4,
            }
        },
        progressBar: {
            main: COLORS.white_5,
            secondary: COLORS.pink_3,
            title: COLORS.black,
            percentText: COLORS.gray,
            boxShadow: "none",
        },
    },
});

export default lightTheme
