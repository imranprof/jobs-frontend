import {JobSeekerSectionData} from "../../../../API/elements/profile/jobSeekerSectionData";
import Section from "./section";
import {EmployerSectionData} from "../../../../API/elements/profile/employerSectionData";
import {connect} from "react-redux";

const Sections = (props) => {
  const jobSeekerSections = JobSeekerSectionData();
  const employerSections = EmployerSectionData();
  const {role} = props;

  let sections;
  if(role === 'employer'){
    sections = employerSections;
  }
  else {
    sections = jobSeekerSections;
  }

  return (
    <>
      {sections.map(section =>
        <Section section={section} key={section.id}/>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.topSection.role
  }
}

export default connect(mapStateToProps)(Sections);
