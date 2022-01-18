import Home from '../src/components/Home'
import CustomDivider from "../src/components/CustomMui/Divider/divider";
import Features from "../src/components/Features";

const Root = () => {
    return (
        <>
            <Home/>
            <CustomDivider/>
            <Features />
            <CustomDivider/>
        </>
    );
}
export default Root