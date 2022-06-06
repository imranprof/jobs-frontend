import {TailSpin} from "react-loader-spinner";

import {useTheme} from "@material-ui/core/styles";

import {LoaderStyle} from "./style";

const CustomLoader = () => {
    const theme = useTheme();
    const classes = LoaderStyle(theme);

    return (
        <div className={classes.loaderWrapper}>
            <TailSpin color="#FF014F" height={70} width={70} ariaLabel='loading' />
        </div>
    );
}

export default CustomLoader;
