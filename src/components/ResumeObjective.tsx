import * as React from "react";
import Accordion from "./ResumeAccordion";

interface IResumeObjectiveProps {
  objective: string;
}

class ResumeObjective extends React.Component<IResumeObjectiveProps, any> {
  public render() {
    return (
      <Accordion title="Objective">
        <p>{this.props.objective}</p>
      </Accordion>
    );
  }
}

export default ResumeObjective;
