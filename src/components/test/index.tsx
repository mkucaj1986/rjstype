import PropTypes from 'prop-types';
import React from 'react';

interface IProps {
  name: string;

  className: string;
}

const state: any = {
  returnValue: null
};

const Test = (props: IProps) => {
  return <div className={props.className}>{state.returnValue}</div>;
};

Test.propTypes = {
  name: PropTypes.string
};

// Same approach for defaultProps too
Test.defaultProps = {
  name: 'Alan',
  className: 'app-sample-class'
};

export default Test;
