import * as React from "react";

interface IProfilePicProps {
  class: string;
}

export default class ProfilePic extends React.Component<IProfilePicProps, any> {
  public render() {
    return (
      <div className={"card-content " + this.props.class}>
        <div className="card-image">
          <figure className="image">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
      </div>
    );
  }
}
