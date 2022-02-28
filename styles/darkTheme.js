import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: COLORS.black_1
        },
        customBackground: {
            main: COLORS.white,
            light: COLORS.black_1,
            dark: COLORS.black_2,
            gradiant: {
                light: COLORS.black_4,
                dark: COLORS.black_5,
                highContrast: COLORS.pink_1,
            },
            sideBar: COLORS.black_2,
        },
        customColor: {
            main: COLORS.white_4,
            light: COLORS.white,
            dark: COLORS.gray_3,
            highContrast: COLORS.pink,
        },
        customShadow: {
            main: COLORS.boxShadow_1,
            light: COLORS.boxShadow_4,
            dark: COLORS.boxShadow_7,
            default: COLORS.boxShadow_3
        },
        customDivider: {
            main: COLORS.black_3,
            secondary: COLORS.black_10
        },
        customHoverColor: {
            main: COLORS.pink
        },
        customHoverBackground: {
            main: COLORS.black_5,
            closeIcon: COLORS.black_4,
            resumeCard: COLORS.black_1
        },
        beforeBackground: {
          main: COLORS.black_7,
        },
        beforeShadow: {
          main: COLORS.boxShadow_8,
        },
        afterBackground: {
            main: COLORS.black_8
        },
        customBorder: {
            beforeElement: COLORS.black_6
        },
        resume: {
            navListColor: COLORS.white_4,
            navListShadow: COLORS.boxShadow_3,
            navListTitle: COLORS.pink,
            mainTitle: COLORS.white_4,
            subTitle: COLORS.pink_2,
            cardBeforeBG: COLORS.black_5,
            cardShadow: COLORS.boxShadow_3,
            cardTitle: COLORS.white_4,
            cardSubTitle: COLORS.gray_4,
            cardDescription: COLORS.gray_3,
            cardDivider: COLORS.black_10,
            hover: {
                cardTitle: COLORS.white,
                cardSubTitle: COLORS.gray_4,
                cardDescription: COLORS.white_4,
            }
        },
        progressBar: {
            main: COLORS.black_1,
            secondary: COLORS.pink_orange,
            title: COLORS.white_6,
            percentText: COLORS.white_6,
            boxShadow: COLORS.boxShadow_8,
        }
    },
});

export default darkTheme
