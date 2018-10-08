import * as React from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import ProfileSummary from "./ProfileSummary";
import ProfileContact from "./ProfileContact";
import * as styles from "../styles/Profile.m.scss";
import profile from "../data/profile";

interface IProfileState {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  image: string;
  title: string;
  summary: string;
}

class Profile extends React.Component<any, IProfileState> {
  constructor(props: any) {
    super(props);
    this.state = profile;
  }

  public render() {
    return (
      <div className={styles.card}>
        <ProfilePic class={styles.pic} />
        <ProfileName class={styles.name} name={this.state.name} title={this.state.title} />
        <ProfileSummary class={styles.summary} summary={this.state.summary} />
        <ProfileContact
          class={styles.contact}
          email={this.state.email}
          phone={this.state.phone}
          linkedin={this.state.linkedin}
          github={this.state.github} />
      </div>
    );
  }
}

export default Profile;
