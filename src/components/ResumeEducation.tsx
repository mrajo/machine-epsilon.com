import * as React from "react";
import Accordion from "./ResumeAccordion";

interface IResumeEducationProps {
  education: {
    degree: string;
    graduationDate: string;
    institution: string;
  };
}

class ResumeEducation extends React.Component<IResumeEducationProps, any> {
  public render() {
    return (
      <Accordion title="Education">
        <p>
          {this.props.education.degree}, {this.props.education.graduationDate}<br/>
          {this.props.education.institution}
        </p>
      </Accordion>
    );
  }
}

export default ResumeEducation;
