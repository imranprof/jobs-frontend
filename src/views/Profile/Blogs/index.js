import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import CustomCard from "../../../lib/profile/card/card";
import {Grid} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

import {BlogsStyle} from "./style";
import CustomSnackbar from "../../../lib/customSnackbar";
import {getBlogsAction, getDemoBlogsAction} from "../../../store/actions/blogActions";
import AddButton from "../../../lib/addButton";
import BlogModal from "./components/blogModal";

const Blogs = (props) => {
  const theme = useTheme();
  const classes = BlogsStyle(theme);
  const {blogs, profileSlug, editPermission} = props;
  const [toast, setToast] = useState({show: false, severity: "", text: ""})
  const [toggleBlogModal, setToggleBlogModal] = useState(false);
  const dispatch = useDispatch();
  const {profile} = useRouter().query;

  useEffect(
    () => {
      profile && profileSlug ? dispatch(getBlogsAction()) : dispatch(getDemoBlogsAction());
    }, [profile, profileSlug]
  )

  const handleClick = () => {
    setToggleBlogModal(!toggleBlogModal);
  }

  const getPermission = () => {
    return !!(profileSlug && editPermission);
  }

  return (
    <>
      {getPermission() &&
      <div className={`${classes.blogsWrapper}__add-Button`}>
            <span onClick={handleClick}>
                <AddButton tooltipTitle={"Add blog"}/>
            </span>
      </div>
      }
      <Grid container spacing={4} className={classes.blogsWrapper} id="blog">
        {blogs?.map(blog => (
          <CustomCard key={blog.id} element={blog} elementType="blog" toast={toast} setToast={setToast} editPermission={getPermission()}/>
        ))}
      </Grid>

      {toast.show &&
      <CustomSnackbar
        toast={toast}
        setToast={setToast}/>
      }

      {toggleBlogModal && <BlogModal
        setToggleBlogModal={setToggleBlogModal}
        editMode={true}
        blog={{
          title: "",
          categories: [],
          description: "",
          image: "blog-01.jpg"
        }}
        addMode={true}
        toast={toast}
        setToast={setToast}
      />
      }
    </>
  );
}

const mapStateToProps = (state) =>
{
  return {
    blogs: state.blogs.allBlogs,
    profileSlug: state.auth.profileSlug,
    editPermission: state.auth.editPermission
  }
}

export default connect(mapStateToProps)(Blogs);
