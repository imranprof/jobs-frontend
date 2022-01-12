import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const lightTheme = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    },
    palette: {
        type: "light",
        background: {
            default: COLORS.white_1
        },
        customBackground: {
            light: COLORS.white_1,
            dark: COLORS.white_2,
            gradiant: {
                light: COLORS.white_3,
                dark: COLORS.pink_1
            },
            sideBar: COLORS.white_1
        },
        customColor: {
            main: COLORS.gray
        },
        customDivider: {
            main: COLORS.white
        }
    },
});

export default lightTheme
