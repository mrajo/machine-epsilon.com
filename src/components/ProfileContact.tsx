import * as React from "react";
import ContactInfo from "./ContactInfo";

interface IProfileContactProps {
  class: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export default class ProfileContact extends React.Component<IProfileContactProps, any> {
  public render() {
    return (
      <div className={`card-content ${this.props.class}`}>
        <ul className="fa-ul">
          <ContactInfo icon="phone" contact={this.props.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")} />
          <ContactInfo icon="envelope-open">
            <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </ContactInfo>
          <ContactInfo icon={["fab", "linkedin"]}>
            <a href={`https://www.linkedin.com/in/${this.props.linkedin}`}>{this.props.linkedin}</a>
          </ContactInfo>
          <ContactInfo icon={["fab", "github"]}>
            <a href={`https://github.com/${this.props.github}`}>{this.props.github}</a>
          </ContactInfo>
        </ul>
      </div>
    );
  }
}
