import * as React from "react";

export interface IJob {
  title: string;
  when: string;
  employer: string;
  description: string | string[];
}

interface IJobProps {
  job: IJob;
}

export default class Job extends React.Component<IJobProps, any> {
  public render() {
    const job = this.props.job;
    const desc = !Array.isArray(job.description) ?
      <p>{job.description}</p> :
      <ul>
        {job.description.map((note: string, i: number) => (
          <li key={i}>{note}</li>
        ))}
      </ul>;
    return (
      <article>
        <h1>{job.title}, {job.when}</h1>
        <h2>{job.employer}</h2>
        {desc}
      </article>
    );
  }
}
