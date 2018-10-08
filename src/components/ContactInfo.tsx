import * as React from "react";

interface IContactInfoProps {
  icon: string;
  contact?: string;
  children?: any;
}

export default class ContactInfo extends React.Component<IContactInfoProps, any> {
 public render() {
   return (
    <li>
      <span className="fa-li"><i className={this.props.icon} /></span>
      {this.props.contact ? this.props.contact : this.props.children}
    </li>
  );
 }
}
