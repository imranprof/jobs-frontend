import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";
import {ProfileShare} from "../../lib/profile/profileshare/profileShare";

const Profile = () => {
    return (
        <>
            <TopSection/>
            <CustomDivider/>
            <Sections/>
            <div>
                <ProfileShare shareUrl={"https://facebook.com/imransart"}/>
            </div>

        </>
    );
}

export default withLayout(Profile, 'profile');
