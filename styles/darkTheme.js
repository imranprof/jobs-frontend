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
            resumeSubTitle: COLORS.pink_2
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
        progressBar: {
            main: COLORS.black_9,
            secondary: COLORS.pink_orange
        }
    },
});

export default darkTheme
