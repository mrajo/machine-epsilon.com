import * as React from "react";

interface IContactInfo {
  icon: string;
  contact?: string;
  children?: any;
}

const ContactInfo = (props: IContactInfo) => (
  <li>
    <span className="fa-li"><i className={props.icon} /></span>
    {props.contact ? props.contact : props.children}
  </li>
);

export default ContactInfo;
