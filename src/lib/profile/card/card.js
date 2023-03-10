import Link from 'next/link'
import {useState} from 'react';
import {connect, useDispatch} from "react-redux";

import {Card, CardContent, CardMedia} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import PortfolioModal from "../../../views/Profile/Portfolio/components/portfolioModal";
import BlogModal from "../../../views/Profile/Blogs/components/blogModal";
import {CardStyle} from "./style";
import RemoveButton from "../../removeButton";
import EditButton from "../../editButton";
import {removePortfolioAction} from "../../../store/actions/portfolioActions";
import {blogsRemoveAction} from "../../../store/actions/blogActions";

const CustomCard = (props) => {
  const theme = useTheme();
  const classes = CardStyle(theme);
  const {element, elementType, portfolios, toast, setToast, blogs, profileSlug, editPermission} = props;
  const {title, image, categories, reactCount, reading_time} = element;

  const isPortfolio = elementType === "portfolio";
  const iconClass = isPortfolio ? "heart" : "clock";
  const elementData = isPortfolio ? reactCount : `${reading_time} min read`;

  const [togglePortfolioModal, setTogglePortfolioModal] = useState(false);
  const [toggleBlogModal, setToggleBlogModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const getCategories = () => {
    if (categories?.length > 0) {
      let categoriesText = categories[0].title
      if (categories?.length === 2) categoriesText += " " + categories[1].title
      if (categories?.length > 2) categoriesText += ` ${categories[1].title}...`
      return categoriesText;
    }
  }

  const getTitle = () => {
    if (title.length > 40) {
      return `${title.slice(0, 40)}...`;
    } else {
      return title;
    }
  }

  const removeHandler = (item) => {
    if (isPortfolio) {
      profileSlug && dispatch(removePortfolioAction(item.id));
      setToast({show: true, severity: "success", text: "Successfully deleted the portfolio!"});
    } else {
      profileSlug && dispatch(blogsRemoveAction(item.id))
      setToast({show: true, severity: "success", text: "Successfully deleted the blog!"});
    }
  }

  return (
    <>
      <Card xs={12} sm={6} md={4}
            className={classes.cardWrapper}
            onClick={() => {
              setEditMode(false);
              if (isPortfolio) setTogglePortfolioModal(true)
              else setToggleBlogModal(true)
            }}>
        {editPermission &&
        <span className={`${classes.cardWrapper}__buttons`}>
          <span onClick={(e) => {
            setEditMode(true);
            if (isPortfolio) setTogglePortfolioModal(true);
            else setToggleBlogModal(true);
            e.stopPropagation();
          }} id="edit">
            <EditButton/>
          </span>
          <span onClick={(e) => {
            removeHandler(element);
            e.stopPropagation();
          }} id="delete">
            <RemoveButton/>
          </span>
        </span>
        }

        <div className={`${classes.cardWrapper}__image-wrapper`}>
          <CardMedia
            className={`${classes.cardWrapper}__image`}
            image={image}
            title={title}
          />
        </div>
        <CardContent className={`${classes.cardWrapper}__content`}>
          <div className={`${classes.cardWrapper}__category-info`}>
            <div className={`${classes.cardWrapper}__category-info__category`}>
              <Link href="#">
                <a>{getCategories()}</a>
              </Link>
            </div>
            <div className={`${classes.cardWrapper}__category-info__icon-wrapper`}>
              <Icon
                className={`${classes.cardWrapper}__category-info__react ${FontAwesomeIcons[iconClass]}`}/>
              {elementData}
            </div>
          </div>
          <h1 className={`${classes.cardWrapper}__title`}>
            <Link scroll={false} href="#">
              <a className={`${classes.cardWrapper}__title__link`}>
                {getTitle()}
                <Icon
                  className={`${classes.cardWrapper}__title__link__arrow ${FontAwesomeIcons.arrowRight}`}/>
              </a>
            </Link>
          </h1>
        </CardContent>
      </Card>
      {togglePortfolioModal && <PortfolioModal
        setTogglePortfolioModal={setTogglePortfolioModal}
        editMode={editMode}
        portfolio={element}
        toast={toast}
        setToast={setToast}/>
      }

      {toggleBlogModal && <BlogModal
        setToggleBlogModal={setToggleBlogModal}
        editMode={editMode}
        blog={element}
        toast={toast}
        setToast={setToast}
      />
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    portfolios: state.portfolios,
    blogs: state.blogs.allBlogs,
    profileSlug: state.auth.profileSlug
  }
}

export default connect(mapStateToProps, null)(CustomCard);
