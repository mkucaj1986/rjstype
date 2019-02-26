import SampleHoc from 'components/hocSample';
import ReactCom from 'components/reactcom';
import Test from 'components/test';
import * as React from 'react';

const testFun = (): void => {
  // tslint:disable-next-line:no-console
  console.log('123');
};

const Home = () => (
  <div>
    <h1>Michal Kucaj Front End Developer Test</h1>
    <Test name="James" />
    <ReactCom text="Hello APP" testFn={testFun} />
  </div>
);

export default SampleHoc(Home);
