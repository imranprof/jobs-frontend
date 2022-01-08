import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    },
    palette: {
        type: "dark",
        background: {
            default: COLORS.black_1
        },
        primary: {
            main: COLORS.white_2
        },
        secondary: {
            main: COLORS.white
        },
    },
});

export default darkTheme
