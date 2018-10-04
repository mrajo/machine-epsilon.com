import * as React from "react";

class ProfilePic extends React.Component {
  public render() {
    return (
      <div className="card-content">
        <div className="card-image">
          <figure className="image">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
      </div>
    );
  }
}

export default ProfilePic;
