import * as React from "react";
import Accordion from "./ResumeAccordion";
import { IJob, default as Job } from "./Job";
import * as styles from "../styles/Resume.m.scss";

interface IExperienceProps {
  experience: IJob[];
}

export default class Experience extends React.Component<IExperienceProps, any> {
  public render() {
    return (
      <Accordion title="Experience" class={styles.experience}>
        <>
          {this.props.experience.map((job: IJob) => (<Job job={job} />))}
        </>
      </Accordion>
    );
  }
}
