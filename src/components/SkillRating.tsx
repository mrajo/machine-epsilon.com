import * as React from "react";
import * as styles from "../styles/Resume.m.scss";

interface ISkillRatingProps {
  skill: string;
  rating: number;
}

export default class SkillRating extends React.Component<ISkillRatingProps, any> {
  public render() {
    const fullStars = Array.apply(null, { length: Math.floor(this.props.rating) }).map((e: any, i: number) => <i key={i} className="fas fa-star" />);
    const halfStar = Array.apply(null, { length: Math.ceil(this.props.rating) - Math.floor(this.props.rating) }).map((e: any, i: number) => <i key={i} className="fas fa-star-half-alt" />);
    const blankStars = Array.apply(null, { length: 5 - Math.ceil(this.props.rating) }).map((e: any, i: number) => <i key={i} className="far fa-star" />);
    return (
      <li>{this.props.skill}: <span className={styles.rating}>{fullStars}{halfStar}{blankStars}</span></li>
    );
  }
}
