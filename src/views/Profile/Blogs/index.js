import {connect, useDispatch} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import {useEffect, useState} from "react";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getBlogsAction} from "../../../store/actions/blogActions";
import AddButton from "../../../lib/addButton";
import BlogModal from "./components/blogModal";

const Blogs = (props) => {
    const theme = useTheme();
    const classes = BlogsStyle(theme);
    const { blogs, userID} = props;
    const [toast, setToast] = useState({show: false, severity: "", text: ""})
    const [toggleBlogModal, setToggleBlogModal] = useState(false);

    const dispatch = useDispatch()

    useEffect(
        () => {
            userID && dispatch(getBlogsAction({id: userID}))
        }, []
    )

    const handleClick = () => {
        console.log(blogs[0]);
        return (
          <BlogModal
            setToggleBlogModal={true}
            editMode={true}
            blog={blogs[0]}/>

        )


    }

    return (
      <>
        <div className={`${classes.blogsWrapper}__add-Button`} >
            <span onClick={handleClick}>
                <AddButton/>
            </span>

        </div>
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {blogs?.map(blog => (
              <div key = {blog.id} className={`${classes.blogsWrapper}__blog-card`}>
                  <CustomCard key={blog.id} element={blog} elementType="blog" setToast={setToast}/>
              </div>
            ))}
        </Grid>

        {toast.show &&
          <CustomSnackbar
            toast={toast}
            setToast={setToast}/>
          }
      </>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.allBlogs,
        userID: state.auth.userID
    }
}

export default connect(mapStateToProps)(Blogs);
