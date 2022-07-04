import {connect} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import {useState} from "react";
import CustomSnackbar from "../../../lib/customSnackbar";

const Blogs = (props) => {
    const theme = useTheme();
    const classes = BlogsStyle(theme);
    const { blogs} = props;
    const [toast, setToast] = useState({show: false, severity: "", text: ""})

    return (
      <>
        <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
            {blogs.map(blog => (
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
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(Blogs);
