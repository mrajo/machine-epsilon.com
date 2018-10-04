import * as React from "react";

class Resume extends React.Component {
  public render() {
    return (
      <section className="box accordions">
        <article className="accordion is-active">
          <h1>Skills</h1>
        </article>
        <article className="accordion">
          <h1>Experience</h1>
        </article>
        <article className="accordion" />
        <article className="accordion" />
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

export default Resume;
