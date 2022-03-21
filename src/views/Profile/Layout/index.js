import {Container} from "@material-ui/core";

import Header from '../Header'
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Container fixed>
                {children}
            </Container>
            <Footer/>
        </>
    );
};

export default Layout;
