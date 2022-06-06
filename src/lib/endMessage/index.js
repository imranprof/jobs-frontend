import {useTheme} from "@material-ui/core/styles";

import {EndMessageStyle} from "./style";

const EndMessage = ({ title }) => {
    const theme = useTheme();
    const classes = EndMessageStyle(theme);

    return (
        <div className={classes.endMessageWrapper}>
            <span>{title}</span>
        </div>
    );
}

export default EndMessage;
