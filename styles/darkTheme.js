import {createTheme} from "@material-ui/core/styles";
import COLORS from "./colors";

const darkTheme = createTheme({
    palette: {
        type: "dark",
        background: {
            default: COLORS.black_1
        },
        customBackground: {
            light: COLORS.black_1,
            dark: COLORS.black_2,
            gradiant: {
                light: COLORS.black_4,
                dark: COLORS.black_5
            },
            sideBar: COLORS.black_2
        },
        customColor: {
            main: COLORS.white
        },
        customDivider: {
            main: COLORS.black_3
        }
    },
});

export default darkTheme
