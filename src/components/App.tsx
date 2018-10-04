import * as React from "react";
import Layout from "./Layout";
import Profile from "./Profile";
import Resume from "./Resume";

interface IAppProps {
  metadata: {
    title: string;
  };
}

class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <Layout metadata={this.props.metadata}>
        <div className="columns is-gapless">
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

export default App;
