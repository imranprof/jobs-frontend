import {SectionsData} from "../../../../API/elements/profile/sectionsData";
import Section from "./section";

const Sections = () => {
    const sections = SectionsData();

    return (
        <>
            {sections.map(section =>
                <Section section={section} key={section.id}/>
            )}
        </>
    );
}

export default Sections;
