import React, {memo} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Colors from 'utils/colors';
import TitleText from '../TitleText';

export interface PropTypes {
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  hideContentWhileLoading?: boolean;
  buttonStyle?: ViewStyle;
  tintColor?: ColorValue;
  round?: boolean;
  width?: number | string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  textStyle?: TextStyle;
}

const Button: React.FC<PropTypes> = memo(
  ({
    text,
    loading,
    hideContentWhileLoading,
    disabled,
    tintColor = Colors.DarkOxfordBlue,
    round,
    buttonStyle,
    onPress,
    width = 168,
    textStyle,
  }) => {
    const isHideContent = loading && hideContentWhileLoading;

    return (
      <Pressable
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonView,
          round && styles.buttonRoundView,
          {backgroundColor: tintColor, width},
          buttonStyle,
        ]}>
        {text && !isHideContent && (
          <TitleText style={textStyle || styles.buttonText}>{text}</TitleText>
        )}
        {loading && <ActivityIndicator color={Colors.white} />}
      </Pressable>
    );
  },
);

export const styles = StyleSheet.create({
  buttonView: {
    width: 168,
    height: 42,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonRoundView: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonText: {
    fontWeight: '700',
    color: Colors.white,
  },
});

export default memo(Button);
