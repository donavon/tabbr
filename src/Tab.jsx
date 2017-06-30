import React from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

const Tab = ({ children, selected, onClick, disabled, ...others }) => (
  <li role="presentation">
    <button
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      aria-disabled={disabled}
      aria-selected={selected}
      onClick={disabled ? noop : onClick}
      role="tab"
      {...others}
    >
      {children}
    </button>
  </li>
);

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  className: '',
  selected: false,
  disabled: false,
  onClick: noop,
};

export default Tab;
