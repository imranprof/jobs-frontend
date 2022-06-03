import CustomDivider from "../../lib/profile/divider/divider";
import Sections from "../../lib/profile/sections";
import TopSection from "../../views/Profile/TopSection";
import withLayout from "../../views/Layout";


const Profile = () => {
    return (
        <>
            <TopSection/>
            <CustomDivider/>
            <Sections/>
        </>
    );
}

export default withLayout(Profile, 'profile');
