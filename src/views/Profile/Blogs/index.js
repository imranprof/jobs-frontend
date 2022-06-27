import {connect} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import RemoveButton from "../../../lib/removeButton";

const Blogs = (props) => {
    const theme = useTheme();
    const classes = BlogsStyle(theme);
    const { blogs } = props;

    return (
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {blogs.map(blog => (
              <div key = {blog.id} className={`${classes.blogsWrapper}__blog-card`}>
                  <div className={`${classes.blogsWrapper}__remove-button`}>
                      <span>
                         <RemoveButton key = {blog.id}/>
                      </span>
                  </div>
                  <CustomCard key={blog.id} element={blog} elementType="blog"/>
              </div>
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
