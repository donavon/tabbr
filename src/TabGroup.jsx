import React from 'react';
import PropTypes from 'prop-types';

const TabGroup = ({ selectedIndex, children, onChange, selectedClassName, ...others }) => {
  const newChildren = React.Children.map(children, (child, index) => {
    const onClick = () => {
      onChange(index);
    };
    const selected = selectedIndex === index;
    const childClassName = child.props.className || '';
    const className = `${childClassName} ${selected ? selectedClassName : ''}`.trim();
    const disabled = child.props.disabled;
    return React.cloneElement(child, {
      onClick,
      selected,
      className,
      disabled,
    });
  });

  return (
    <ul role="tablist" {...others}>
      {newChildren}
    </ul>
  );
};

TabGroup.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedClassName: PropTypes.string,
};

TabGroup.defaultProps = {
  selectedClassName: '',
};

export default TabGroup;
