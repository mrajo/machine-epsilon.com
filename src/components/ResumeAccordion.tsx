import * as React from "react";
import * as styles from "../styles/Resume.m.scss";

interface IResumeAccordionProps {
  title: string;
  class?: string;
  children?: any;
}

class ResumeAccordion extends React.Component<IResumeAccordionProps, any> {
  public render() {
    return (
      <article className={`${styles.accordion} ${this.props.class}`}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </article>
    );
  }
}

export default ResumeAccordion;
