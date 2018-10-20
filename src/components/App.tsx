import * as React from "react";
import Layout from "./Layout";
import Profile from "./Profile";
import Resume from "./Resume";
import * as styles from "../styles/App.m.scss";

interface IAppProps {
  metadata: {
    title: string;
  };
}

export default class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <Layout metadata={this.props.metadata}>
        <div className={`columns is-gapless ${styles.app}`}>
          <div className="column is-narrow">
            <Profile />
          </div>
          <div className="column">
            <Resume />
          </div>
        </div>
      </Layout>
    );
  }
}
