import {Avatar} from "@material-ui/core";
import {profileInfo} from "../../../API/mock/profileInfo";

const ProfileInfo = ({classes}) => {
    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={profileInfo.name}
                src={profileInfo.image}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            <span className={`${classes.headerWrapper}__profile__name`}>
                 {profileInfo.name}
            </span>
        </div>
    );
};

export default ProfileInfo;
