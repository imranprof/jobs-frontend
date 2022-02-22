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
            highContrast: COLORS.pink
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
        }
    },
});

export default lightTheme