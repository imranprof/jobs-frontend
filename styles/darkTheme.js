import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
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
        footer:{
            main: COLORS.white_3
        } ,
        customDivider:{
            main: COLORS.black_2
        },
        sideBar: {
            background: COLORS.black_3
        }
    },
});

export default darkTheme
