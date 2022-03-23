import React, {memo} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import colors from 'utils/colors';

const LoadingIndicator = ({
  color = colors.White,
  size = 'large',
}: {
  color?: string;
  size?: number | 'large' | 'small';
}) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
  },
});

export default memo(LoadingIndicator);
