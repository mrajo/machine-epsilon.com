import * as React from "react";
import { ISkillSection } from "./ResumeSkills";
import SkillRating from "./ResumeSkillRating";

interface IResumeSkillSectionProps {
  section: ISkillSection;
}

class ResumeSkillSection extends React.Component<IResumeSkillSectionProps, any> {
  public render() {
    const items = this.props.section.items;

    return (
      <section>
        <h1>{this.props.section.title}</h1>
        <ul>
          {Object.keys(items).map((item: any) => <SkillRating key={item} skill={item} rating={items[item]} />)}
        </ul>
      </section>
    );
  }
}

export default ResumeSkillSection;
