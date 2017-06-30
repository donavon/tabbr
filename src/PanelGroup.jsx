import React from 'react';

export const PanelGroup = ({ selectedIndex, children, ...others }) => {
  const newChildren = React.Children.toArray(children);
  const child = newChildren[selectedIndex];

  return React.cloneElement(child, {
    role: 'tabpanel',
    ...others,
  });
};

export const Panel = ({ children, ...others }) => {
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    ...others,
  });
};
