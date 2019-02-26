import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './index.css';

interface ButtonProps {
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  text: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  const { type, text, disabled, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || false}
      className={styles[type]}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  type: 'default',
  text: 'Button',
  disabled: false,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
