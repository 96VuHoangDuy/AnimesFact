import React, {memo} from 'react';
import {ColorValue, StyleSheet, Text, TextProps} from 'react-native';
import Colors from 'utils/colors';

type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

export interface PropTypes extends TextProps {
  color?: ColorValue;
  size?: number;
  weight?: '100' | '400' | '500' | '600' | 'bold' | 'normal';
  textAlign?: 'left' | 'right' | 'center' | 'auto' | 'justify';
  lineHeight?: number;
  alignSelf?: 'auto' | FlexAlignType;
}

const ContentText: React.FC<PropTypes> = memo(
  ({
    children,
    style,
    size = 14,
    color = Colors.black,
    weight = 'normal',
    lineHeight = 22,
    textAlign = 'auto',
    alignSelf = 'auto',
  }) => {
    return (
      <Text
        style={[
          styles.text,
          {
            fontSize: size,
            color,
            fontWeight: weight,
            lineHeight,
            textAlign,
            alignSelf,
          },
          style,
        ]}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {},
});
export default ContentText;
