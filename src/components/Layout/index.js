import React from 'react';

import {Container} from "@material-ui/core";

import Navbar from '../Navbar'
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container maxWidth="xl">
                {children}
            </Container>
            <Footer/>
        </>
    );
};

export default Layout;
