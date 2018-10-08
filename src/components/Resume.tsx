import * as React from "react";
import Education from "./Education";
import Objective from "./Objective";
import Skills from "./Skills";
import * as styles from "../styles/Resume.m.scss";
import resume from "../data/resume";

export default class Resume extends React.Component {
  public render() {
    return (
      <section className={"accordions " + styles.resume}>
        <Objective objective={resume.objective} />
        <Skills skills={resume.skills} />
        <Education education={resume.education} />
      </section>
    );
  }
}

function accordionClickHandler(e: any) {
  e.preventDefault();

  const target = e.currentTarget.closest(".accordion") || e.currentTarget;
  if (!target.classList.contains("is-active")) {
    const activeItem = e.target.querySelector(".accordion.is-active");
    if (activeItem) {
      activeItem.classList.remove("is-active");
    }
    target.classList.add("is-active");
  } else {
    target.classList.remove("is-active");
  }
}
