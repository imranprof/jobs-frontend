import {Avatar} from "@material-ui/core";
import {profileData} from "../../../API/mock/profileData";

const ProfileInfo = ({classes}) => {
    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={profileData.name}
                src={profileData.image}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            <span className={`${classes.headerWrapper}__profile__name`}>
                 {profileData.name}
            </span>
        </div>
    );
};

export default ProfileInfo;
