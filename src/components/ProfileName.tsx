import * as React from "react";

interface IProfileNameProps {
  class: string;
  name: string;
  title: string;
}

export default class ProfileName extends React.Component<IProfileNameProps, any> {
  public render() {
    return (
      <div className={"card-content " + this.props.class}>
        <h1>{this.props.name}</h1>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
