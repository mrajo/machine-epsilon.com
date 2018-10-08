import * as React from "react";
import { ISkillSection } from "./Skills";
import SkillRating from "./SkillRating";

interface ISkillSectionProps {
  section: ISkillSection;
}

export default class SkillSection extends React.Component<ISkillSectionProps, any> {
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
