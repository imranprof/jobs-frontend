import {connect} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import RemoveButton from "../../../lib/removeButton";
import {blogsRemove} from "../../../store/actions/blogActions";

const Blogs = (props) => {
    const theme = useTheme();
    const classes = BlogsStyle(theme);
    const { blogs} = props;

    const blogRemoveHandler =(blog_id)=> {
        const currentBlogs = blogs.filter(blog=> blog.id !== blog_id)
        props.blogsRemove(currentBlogs);
    }

    return (
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {blogs.map(blog => (
              <div key = {blog.id} className={`${classes.blogsWrapper}__blog-card`}>
                  <div className={`${classes.blogsWrapper}__remove-button`}>
                      <span onClick ={()=>blogRemoveHandler(blog.id)}>
                         <RemoveButton />
                      </span>
                  </div>
                  <CustomCard key={blog.id} element={blog} elementType="blog"/>
              </div>
            ))}
        </Grid>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        blogs: state.blogs
    }
}

const mapDispatchToProps = (dispatch) => ({
    blogsRemove: (blogs) => dispatch(blogsRemove(blogs))
})

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
