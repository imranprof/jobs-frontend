import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const lightTheme = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    },
    palette: {
        type: "light",
        background: {
            default: COLORS.light.backgroundDefault
        },
        primary: {
            main: COLORS.light.primaryMain
        },
        secondary: {
            main: COLORS.light.secondaryMain
        },
    },
});

export default lightTheme
