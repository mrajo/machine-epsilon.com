import * as React from "react";
import Accordion from "./ResumeAccordion";
import SkillSection from "./SkillSection";
import * as styles from "../styles/Resume.m.scss";

export interface ISkillSection {
  title: string;
  items: any;
}

interface ISkillsProps {
  skills: ISkillSection[];
}

export default class Skills extends React.Component<ISkillsProps, any> {
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
