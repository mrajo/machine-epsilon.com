import * as React from "react";
import * as ImageProfile from "../images/profile.jpg";

interface IProfilePicProps {
  class: string;
}

export default class ProfilePic extends React.Component<IProfilePicProps, any> {
  public render() {
    return (
      <div className={"card-content " + this.props.class}>
        <div className="card-image">
          <figure className="image">
            <img src={ImageProfile} />
          </figure>
        </div>
      </div>
    );
  }
}
