import {Avatar} from "@material-ui/core";
import {profileData} from "../../../API/mock/profileData";

const ProfileInfo = ({classes, showName}) => {
    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={profileData.name}
                src={profileData.avatar}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            { showName &&
                <span className={`${classes.headerWrapper}__profile__name`}>
                 {profileData.name}
                </span>
            }
        </div>
    );
};

export default ProfileInfo;
