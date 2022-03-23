import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {ANIME_DATA_TYPE} from 'api/AnimeAPI/anime.api.types';
import TitleText from 'Components/Base/TitleText';
import CommonStyles from 'theme/CommonStyles';
import FastImageLoader from 'Components/Base/FastImageLoader/FastImageLoader';
import colors from 'utils/colors';
import Space from 'Components/Base/Space';
import Screen from 'utils/screen';

type ItemCardAnimeProps = {
  data: ANIME_DATA_TYPE;
};

export const IMAGE_SIZE = {
  width: Screen.width * 0.8,
  height: Screen.height * 0.6,
};

const ItemCardAnime: React.FC<ItemCardAnimeProps> = ({data}) => {
  return (
    <View style={styles.containerItem}>
      <FastImageLoader
        style={styles.imageStyle}
        source={{uri: data?.anime_img}}
      />
      <Space width={10} />
      <TitleText color={colors.Froly} level="h2">
        {data?.anime_name}
      </TitleText>
    </View>
  );
};

export default memo(ItemCardAnime);

const styles = StyleSheet.create({
  containerItem: {
    alignItems: 'center',
    marginVertical: CommonStyles.spaceDefault / 2,
  },
  imageStyle: {
    ...IMAGE_SIZE,
    borderRadius: 5,
  },
});
