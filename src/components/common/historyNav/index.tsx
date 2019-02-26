import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import styles from './index.css';

class HistoryNav extends React.Component<{}, {}> {
  history: History;
  constructor(props: any) {
    super(props);
    this.history = createBrowserHistory();
  }

  goRouteBack = () => {
    this.history.goBack();
  };

  goRouteForward = () => {
    this.history.goForward();
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.appHistorynav}>
          <button onClick={() => this.goRouteBack()}>Go Back</button>
          <button onClick={() => this.goRouteForward()}>Go Forward</button>
        </div>
      </React.Fragment>
    );
  }
}

export default HistoryNav;
