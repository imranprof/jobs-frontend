import Link from 'next/link'
import {useState} from 'react';
import {connect} from "react-redux";

import {Card, CardContent, CardMedia} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import FontAwesomeIcons from "../../../../styles/FontAwesomeIcons";
import PortfolioModal from "../../../views/Profile/Portfolio/components/portfolioModal";
import BlogModal from "../../../views/Profile/Blogs/components/blogModal";
import {CardStyle} from "./style";
import RemoveButton from "../../removeButton";
import EditButton from "../../editButton";
import {removePortfolio} from "../../../store/actions/portfolioActions";

const CustomCard = (props) => {
  const theme = useTheme();
  const classes = CardStyle(theme);
  const {element, elementType, portfolios, blogs} = props;
  const {title, image, categories, reactCount, readTime} = element;

  const isPortfolio = elementType === "portfolio";
  const iconClass = isPortfolio ? "heart" : "clock";
  const elementData = isPortfolio ? reactCount : `${readTime} read`;

  const [togglePortfolioModal, setTogglePortfolioModal] = useState(false);
  const [toggleBlogModal, setToggleBlogModal] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const getCategories = () => {
    if (categories) {
      let tempCategories = ""
      for (let i = 0; i < categories.length - 1; i++) {
        tempCategories += categories[i].title + " ";
      }
      if (categories[categories.length - 1]) tempCategories += categories[categories.length - 1].title;
      return tempCategories;
    }
  }
  const removeHandler = (item) => {
    if (isPortfolio) {
      props.removePortfolio(portfolios.filter(portfolio => portfolio.id !== item.id))
    } else {
      // props.removeBlog(blogs.filter(blog => blog.id !== item.id))
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
            removeHandler(element)
            e.stopPropagation();
          }} id="delete">
            <RemoveButton/>
          </span>
        </span>

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
            <Link href="#">
              <a className={`${classes.cardWrapper}__title__link`}>
                {title}
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
        portfolio={element}/>
      }

      {toggleBlogModal && <BlogModal
        setToggleBlogModal={setToggleBlogModal}
        editMode={editMode}
        blog={element}/>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    portfolios: state.portfolios,
    // blogs: state.blogs,
  }
}

const mapDispatchToProps = (dispatch) => ({
  removePortfolio: (portfolio) => dispatch(removePortfolio(portfolio)),
  // removeBlog: (blog) => dispatch(removeBlog(blog))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);
