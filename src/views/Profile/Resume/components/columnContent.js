import {connect} from "react-redux";

import SkillsItem from "./skillsItem";
import ContentItem from "./contentItem";
import {resumeItemRemove} from "../../../../store/actions/resumeActions";

const ColumnContent = (props) => {
  const {position, cardType, cardData} = props;
  const isLeftColumn = () => position === "left";
  const isSkillsItem = () => cardType === "skills";
  const itemCount = cardData.length;
  const columnLimit = Math.floor((itemCount + 1) / 2); // take half the element plus 1 item if total item count is odd
  const startIndex = isLeftColumn() ? 0 : columnLimit;
  const endIndex = isLeftColumn() ? columnLimit : itemCount;

  const resumeItemRemoveHandler = (item) => {
    if (props.resume[cardType].length > 1) {
      props.resume[cardType] = props.resume[cardType].filter(content => content.id !== item.id)

      props.setResumeItemRemove({...props.resume})
    } else {
      alert(`You must have at least one ${cardType}!`)
    }
  }

  let content = [];
  for (let idx = startIndex; idx < endIndex; idx++) {
    content.push(
      isSkillsItem() ?
        <SkillsItem
          key={cardData[idx].id}
          cardType={cardType}
          cardContent={cardData[idx]}
          resumeItemRemoveHandler={resumeItemRemoveHandler}
        /> :
        <ContentItem
          key={cardData[idx].id}
          cardType={cardType}
          cardContent={cardData[idx]}
          resumeItemRemoveHandler={resumeItemRemoveHandler}
        />
    );
  }
  return content;
}

const mapStateToProps = (state) => {
  return {
    resume: state.editResume.resume
  }
}

const mapDispatchToProps = (dispatch) => ({
  setResumeItemRemove: (values) => dispatch(resumeItemRemove(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContent);
