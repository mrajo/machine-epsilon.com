import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "../styles/SkillRating.m.scss";

interface ISkillRatingProps {
  skill: string;
  rating: number;
}

export default class SkillRating extends React.Component<ISkillRatingProps, any> {
  public render() {
    const fullStars = Array.apply(null, { length: Math.floor(this.props.rating) }).map((e: any, i: number) => <FontAwesomeIcon key={i} icon="star" />);
    const halfStar = Array.apply(null, { length: Math.ceil(this.props.rating) - Math.floor(this.props.rating) }).map((e: any, i: number) => <FontAwesomeIcon key={i} icon="star-half-alt" />);
    const blankStars = Array.apply(null, { length: 5 - Math.ceil(this.props.rating) }).map((e: any, i: number) => <FontAwesomeIcon key={i} icon={["far", "star"]} />);
    return (
      <li className={styles.rating}>{this.props.skill}: <span className={styles.rating}>{fullStars}{halfStar}{blankStars}</span></li>
    );
  }
}
