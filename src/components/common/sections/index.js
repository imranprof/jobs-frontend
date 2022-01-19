import {SectionsData} from "../../../../API/elements/sectionsData";
import Section from "./section";

const Sections = () => {
    const sections = SectionsData();
    return (
        <div>
            {sections.map(section =>
                <Section section={section} key={section.id}></Section>
            )}
        </div>

    );
}

export default Sections;
