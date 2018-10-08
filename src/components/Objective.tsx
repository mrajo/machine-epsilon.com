import * as React from "react";
import Accordion from "./ResumeAccordion";

interface IResumeObjectiveProps {
  objective: string;
}

export default class ResumeObjective extends React.Component<IResumeObjectiveProps, any> {
  public render() {
    return (
      <Accordion title="Objective">
        <p>{this.props.objective}</p>
      </Accordion>
    );
  }
}
