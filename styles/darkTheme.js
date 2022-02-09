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
            highContrast: COLORS.pink
        },
        customShadow: {
            main: COLORS.boxShadow_1,
            light: COLORS.boxShadow_4,
            dark: COLORS.boxShadow_7,
            default: COLORS.boxShadow_3
        },
        customDivider: {
            main: COLORS.black_3
        }
    },
});

export default darkTheme
