import {connect, useDispatch} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import {useEffect, useState} from "react";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getBlogsAction} from "../../../store/actions/blogActions";


const Blogs = (props) => {
    const theme = useTheme();
    const classes = BlogsStyle(theme);
    const { blogs, userID} = props;
    const [toast, setToast] = useState({show: false, severity: "", text: ""})

    const dispatch = useDispatch()

    useEffect(
        () => {
            userID && dispatch(getBlogsAction({id: userID}))
        }, []
    )


    return (
      <>

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
