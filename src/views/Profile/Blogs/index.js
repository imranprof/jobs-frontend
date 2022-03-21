import {useContext} from 'react';

import CustomCard from "../../../lib/CustomMui/Card/card";
import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {BlogsStyle} from "./style";
import {BlogsData} from "../../../../API/mock/profile/blogsData";

const Blogs = () => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = BlogsStyle(customTheme);

    return (
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {BlogsData.map(blog => (
                <CustomCard key={blog.id} element={blog} elementType="blog"/>
            ))}
        </Grid>
    );
}

export default Blogs;
