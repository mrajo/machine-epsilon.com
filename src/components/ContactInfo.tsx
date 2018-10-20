import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IContactInfoProps {
  icon: IconProp;
  contact?: string;
  children?: any;
}

export default class ContactInfo extends React.Component<IContactInfoProps, any> {
 public render() {
   return (
    <li>
      <span className="fa-li"><FontAwesomeIcon icon={this.props.icon} /></span>
      {this.props.contact ? this.props.contact : this.props.children}
    </li>
  );
 }
}
