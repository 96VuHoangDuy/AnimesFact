import React, {useCallback} from 'react';
import {observer} from 'mobx-react';

import ItemCardAnime, {IMAGE_SIZE} from 'Components/ItemCard/ItemCard.Anime';
import useLogicAnimeList from './AnimeList.logic';

import Screen from 'utils/screen';
import {LayoutAnimation, RefreshControl, StyleSheet, View} from 'react-native';
import colors from 'utils/colors';
import Carousel from 'react-native-snap-carousel';
import Space from 'Components/Base/Space';
import AnimeListHeader from './AnimeList.Header';
import {AnimeItemStoreData} from 'store/AnimeList.store';
import ListSearchAnime from 'Components/ListSearchAnime/ListSearchAnime';

const AnimeList = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const {
    listAnime,
    favoriteAnimes,
    isFetchingData,
    isShowFavoriteAnime,
    toggleShowFavoriteAnime,
  } = useLogicAnimeList();
  const ItemAnime = useCallback(({item}: {item: AnimeItemStoreData}) => {
    return <ItemCardAnime data={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: AnimeItemStoreData) => item.animeData.anime_name,
    [],
  );

  return (
    <View style={styles.container}>
      <AnimeListHeader
        isShowFavoriteAnime={isShowFavoriteAnime}
        toggleShowFavoriteAnime={toggleShowFavoriteAnime}
      />

      <Space height={50} />

      <Carousel
        keyExtractor={keyExtractor}
        refreshControl={<RefreshControl refreshing={isFetchingData} />}
        data={isShowFavoriteAnime ? favoriteAnimes : listAnime}
        renderItem={ItemAnime}
        sliderWidth={Screen.width}
        itemWidth={IMAGE_SIZE.width}
      />
      <ListSearchAnime />
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
