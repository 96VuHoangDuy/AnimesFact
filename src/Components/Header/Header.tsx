import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import React, {memo} from 'react';
import TitleText from 'Components/Base/TitleText';
import CommonStyles from 'theme/CommonStyles';
import Icon, {IconType} from 'Components/Icon/Icon';
import Space from 'Components/Base/Space';

type HeaderProps = {
  iconLeft?: {
    name: string;
    type: IconType;
    size?: number;
    color?: string;
    onPress?: (event: GestureResponderEvent) => void;
  };
  iconRight?: {
    name: string;
    type: IconType;
    size?: number;
    color?: string;
    onPress?: (event: GestureResponderEvent) => void;
  };
  titleHeader: string;
};

const Header: React.FC<HeaderProps> = ({iconLeft, iconRight, titleHeader}) => {
  return (
    <View style={styles.containerHeader}>
      {iconLeft ? (
        <Icon
          name={iconLeft.name}
          type={iconLeft.type}
          size={iconLeft.size}
          color={iconLeft.color}
          onPress={iconLeft.onPress}
        />
      ) : (
        <Space width={iconRight?.size ?? 0} />
      )}

      <TitleText level="h2" children={titleHeader} />

      {iconRight ? (
        <Icon
          name={iconRight.name}
          type={iconRight.type}
          size={iconRight.size}
          color={iconRight.color}
          onPress={iconRight.onPress}
        />
      ) : (
        <Space width={iconLeft?.size ?? 0} />
      )}
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  containerHeader: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CommonStyles.spaceDefault,
  },
});
