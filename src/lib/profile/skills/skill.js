import {Paper} from "@material-ui/core";

const Skill = ({classes, skill}) => {
    return (
        <Paper elevation={3} className={`${classes.skillsWrapper}__skills__paper`}>
            <img className={`${classes.skillsWrapper}__skills__paper--img`} src={skill.icon} alt={skill.name}/>
        </Paper>
    );
}

export default Skill;
