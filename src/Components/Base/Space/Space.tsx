import React, { memo } from 'react';
import { ColorValue, View } from 'react-native';

export interface PropTypes {
  height?: number | string;
  width?: number | string;
  backgroundColor?: ColorValue;
}

const Space: React.FC<PropTypes> = memo(
  ({ height = 10, width = 0, backgroundColor = 'transparent' }) => {
    return <View style={{ height, width, backgroundColor }} />;
  },
);

export default Space;
