import {useTheme} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {DividerStyle} from "./style";

const CustomDivider = () =>  {
    const theme = useTheme();
    const classes = DividerStyle(theme);
    return (
        <Divider className={`${classes.divider}`}/>
    );
}

export default CustomDivider;
