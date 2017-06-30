import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tabbr extends Component {
  constructor(props) {
    super();
    this.state = { selectedIndex: props.defaultIndex };
  }

  render() {
    const { selectedIndex } = this.state;
    const { children } = this.props;

    const newChildren = React.Children.map(children, (child) => {
      const setIndex = (index) => {
        this.setState({ selectedIndex: index });
      };

      return React.cloneElement(child, {
        selectedIndex,
        onChange: setIndex,
      });
    });

    return (
      <div>
        {newChildren}
      </div>
    );
  }
}

Tabbr.propTypes = {
  defaultIndex: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tabbr.defaultProps = {
  defaultIndex: 0,
};

export default Tabbr;
