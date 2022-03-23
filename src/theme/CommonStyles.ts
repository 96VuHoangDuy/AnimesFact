import {ViewStyle} from 'react-native';

const CommonStyles = {
  flex1: {flex: 1} as ViewStyle,

  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  spaceDefault: 16,

  row: {flexDirection: 'row'} as ViewStyle,
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  } as ViewStyle,
};

export default CommonStyles;
