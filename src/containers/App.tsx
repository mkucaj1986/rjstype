import HistoryNav from 'components/common/historyNav';
import NavBar from 'components/navbar';
import { ConnectedRouter } from 'connected-react-router';
import { AppProps } from 'interfaces/AppProps';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import './App.css';
import styles from './App.css';

// Main App container
const App = ({ history }: AppProps) => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <NavBar />
        <HistoryNav />
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </div>
    </BrowserRouter>
  );
};

export default App;
