import {connect, useDispatch} from "react-redux";

import SkillsItem from "./skillsItem";
import ContentItem from "./contentItem";
import {resumeItemRemoveAction} from "../../../../store/actions/resumeActions";

const ColumnContent = (props) => {
  const {position, cardType, cardData} = props;
  const isLeftColumn = () => position === "left";
  const isSkillsItem = () => cardType === "skills";
  const itemCount = cardData.length;
  const columnLimit = Math.floor((itemCount + 1) / 2); // take half the element plus 1 item if total item count is odd
  const startIndex = isLeftColumn() ? 0 : columnLimit;
  const endIndex = isLeftColumn() ? columnLimit : itemCount;
  const dispatch = useDispatch();

  const resumeItemRemoveHandler = (item) => {
    if (props.resume[cardType].length > 1) {
      dispatch(resumeItemRemoveAction({id: item.id, cardType: cardType}));
      props.setToast({show: true, severity: "success", text: `Successfully deleted the ${cardType}!`});
    } else {
      props.setToast({show: true, severity: "error", text: `You must have at least one ${cardType}!`});
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
          setToast={props.setToast}
        /> :
        <ContentItem
          key={cardData[idx].id}
          cardType={cardType}
          cardContent={cardData[idx]}
          resumeItemRemoveHandler={resumeItemRemoveHandler}
          setToast={props.setToast}
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

export default connect(mapStateToProps)(ColumnContent);
