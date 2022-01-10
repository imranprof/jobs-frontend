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
        primary: {
            main: COLORS.gray
        },
        secondary: {
            main: COLORS.black
        },
    },
});

export default lightTheme
