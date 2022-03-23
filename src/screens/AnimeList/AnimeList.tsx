import React, {useCallback} from 'react';
import {observer} from 'mobx-react';
import {ANIME_DATA_TYPE} from 'api/AnimeAPI/anime.api.types';

import ItemCardAnime, {IMAGE_SIZE} from 'Components/ItemCard/ItemCard.Anime';
import useLogicAnimeList from './AnimeList.logic';

import Screen from 'utils/screen';
import {StyleSheet, View} from 'react-native';
import colors from 'utils/colors';
import Carousel from 'react-native-snap-carousel';
import Header from 'Components/Header/Header';
import Space from 'Components/Base/Space';

const AnimeList = () => {
  const {listAnime} = useLogicAnimeList();

  const ItemAnime = useCallback(({item}: {item: ANIME_DATA_TYPE}) => {
    return <ItemCardAnime data={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Space height={50} />
      <Carousel
        data={listAnime}
        renderItem={ItemAnime}
        sliderWidth={Screen.width}
        itemWidth={IMAGE_SIZE.width}
      />
    </View>
  );
};

export default observer(AnimeList);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
