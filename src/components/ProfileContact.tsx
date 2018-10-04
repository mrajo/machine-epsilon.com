import * as React from "react";
import ContactInfo from "./ContactInfo";

interface IProfileContactProps {
  class: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

class ProfileContact extends React.Component<IProfileContactProps, any> {
  public render() {
    return (
      <div className={"card-content " + this.props.class}>
        <ul className="fa-ul">
          <ContactInfo icon="fas fa-phone" contact={this.props.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")} />
          <ContactInfo icon="fas fa-envelope-open">
            <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </ContactInfo>
          <ContactInfo icon="fab fa-linkedin">
            <a href={`https://www.linkedin.com/in/${this.props.linkedin}`}>{this.props.linkedin}</a>
          </ContactInfo>
          <ContactInfo icon="fab fa-github">
            <a href={`https://github.com/${this.props.github}`}>{this.props.github}</a>
          </ContactInfo>
        </ul>
      </div>
    );
  }
}

export default ProfileContact;
