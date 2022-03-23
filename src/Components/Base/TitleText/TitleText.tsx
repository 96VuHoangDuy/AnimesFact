import React, {memo} from 'react';
import {ColorValue, StyleSheet, Text, TextStyle, StyleProp} from 'react-native';
import Colors from 'utils/colors';

export interface PropTypes {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  numberOfLines?: number;
  onPress?: any;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

export const LEVEL_STYLES: Record<string, TextStyle> = {
  h1: {fontSize: 24, lineHeight: 30, letterSpacing: 0.1, fontWeight: '500'},
  h2: {fontSize: 18, lineHeight: 24, letterSpacing: 0.1, fontWeight: '500'},
  h3: {fontSize: 16, lineHeight: 22, letterSpacing: 0.1, fontWeight: '500'},
  h4: {fontSize: 14, lineHeight: 20, letterSpacing: 0.1, fontWeight: '500'},
  h5: {fontSize: 12, lineHeight: 18, letterSpacing: 0.1, fontWeight: '500'},
  h6: {fontSize: 10, lineHeight: 16, letterSpacing: 0.1, fontWeight: '500'},
};

const TitleText: React.FC<PropTypes> = memo(
  ({
    children,
    level = 'h4',
    style,
    color,
    textAlign,
    numberOfLines,
    onPress,
    fontWeight,
  }) => {
    return (
      <Text
        onPress={onPress}
        style={[
          styles.text,
          LEVEL_STYLES[level],
          color ? {color} : undefined,
          textAlign ? {textAlign} : undefined,
          style,
          fontWeight ? {fontWeight} : undefined,
        ]}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.black,
  },
});
export default TitleText;
