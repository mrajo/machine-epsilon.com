import * as React from "react";
import * as styles from "../styles/Resume.m.scss";

interface IResumeAccordionProps {
  title: string;
  class?: string;
  children?: any;
}

export default class ResumeAccordion extends React.Component<IResumeAccordionProps, any> {
  public render() {
    return (
      <article className={`${styles.accordion} ${this.props.class}`}>
        <h1>&lt;{this.props.title}&gt;</h1>
        {this.props.children}
      </article>
    );
  }
}
