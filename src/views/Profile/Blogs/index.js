import {useContext} from 'react';
import {connect} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";

import ThemeContextProvider from "../../../contexts/themeContext";
import {BlogsStyle} from "./style";

const Blogs = (props) => {
    const customTheme = useContext(ThemeContextProvider);
    const classes = BlogsStyle(customTheme);
    const { blogs } = props;

    return (
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {blogs.map(blog => (
                <CustomCard key={blog.id} element={blog} elementType="blog"/>
            ))}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.profile.blogs
    }
}

export default connect(mapStateToProps)(Blogs);
