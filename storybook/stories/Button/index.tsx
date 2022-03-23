import React from 'react';
import PropTypes from 'prop-types';
import {GestureResponderEvent, TouchableHighlight} from 'react-native';

export type ButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: Element;
};

export default function Button({onPress, children}: ButtonProps) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
