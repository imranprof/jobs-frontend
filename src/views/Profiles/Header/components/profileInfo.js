import {Avatar} from "@material-ui/core";

const ProfileInfo = ({ name, avatar, showName, classes}) => {
    return (
        <div className={`${classes.headerWrapper}__profile`}>
            <Avatar
                alt={name}
                src={avatar}
                className={`${classes.headerWrapper}__profile__pic`}
            />

            { showName &&
                <span className={`${classes.headerWrapper}__profile__name`}>
                 {name}
                </span>
            }
        </div>
    );
};

export default ProfileInfo;
