import SkillsItem from "./skillsItem";
import ContentItem from "./contentItem";

const ColumnContent = ({position, cardType, cardData}) => {
    const isLeftColumn = () => position === "left";
    const isSkillsItem = () => cardType === "skills";

    const itemCount = cardData.length;
    const columnLimit = Math.floor((itemCount + 1) / 2); // take half the element plus 1 item if total item count is odd
    const startIndex = isLeftColumn() ? 0 : columnLimit;
    const endIndex = isLeftColumn() ? columnLimit : itemCount;

    let content = [];
    for (let idx = startIndex; idx < endIndex; idx++) {
        content.push(
            isSkillsItem() ? <SkillsItem key={cardData[idx].id} cardType={cardType} cardContent={cardData[idx]}/> :
                <ContentItem key={cardData[idx].id} cardType={cardType} cardContent={cardData[idx]}/>
        );
    }
    return content;
}

export default ColumnContent;
