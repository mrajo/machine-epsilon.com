import * as React from "react";
import Accordion from "./ResumeAccordion";
import SkillSection from "./ResumeSkillSection";
import * as styles from "../styles/Resume.m.scss";

export interface ISkillSection {
  title: string;
  items: any;
}

interface IResumeSkillsProps {
  skills: ISkillSection[];
}

class ResumeSkills extends React.Component<IResumeSkillsProps, any> {
  public render() {
    return (
      <Accordion title="Skills" class={styles.skills}>
        <>
          {this.props.skills.map((section: ISkillSection) => (<SkillSection section={section} />))}
        </>
      </Accordion>
    );
  }
}

export default ResumeSkills;
