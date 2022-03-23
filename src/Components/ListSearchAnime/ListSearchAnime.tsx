import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import animeListStore, {AnimeItemStoreData} from 'store/AnimeList.store';
import TitleText from 'Components/Base/TitleText';
import CommonStyles from 'theme/CommonStyles';
import FastImage from 'react-native-fast-image';
import Space from 'Components/Base/Space';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'constants/routes';
import colors from 'utils/colors';

const ListSearchAnime = () => {
  const navigation = useNavigation();

  const onNavigateToFactAnime = useCallback(
    (animeName: string) => {
      navigation.push(ROUTES.FACT_ANIME, {animeName: animeName});
      animeListStore.searchAnime('');
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: AnimeItemStoreData}) => (
      <TouchableWithoutFeedback
        onPress={() => onNavigateToFactAnime(item.animeData.anime_name)}>
        <View style={styles.wrapItem}>
          <FastImage
            style={styles.image}
            source={{uri: item.animeData.anime_img}}
          />
          <Space width={10} />
          <TitleText
            children={item.animeData.anime_name
              .replaceAll('_', ' ')
              .toUpperCase()}
          />
        </View>
      </TouchableWithoutFeedback>
    ),
    [onNavigateToFactAnime],
  );

  if (
    !animeListStore.listSearchAnime ||
    animeListStore.listSearchAnime.length === 0
  ) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList data={animeListStore.listSearchAnime} renderItem={renderItem} />
    </View>
  );
};

export default ListSearchAnime;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: 100,
    backgroundColor: colors.white,
    maxHeight: 500,
    borderBottomWidth: 1,
  },
  wrapItem: {
    ...CommonStyles.row,
    padding: 5,
    borderBottomWidth: 1,
  },
  image: {
    height: 30,
    width: 30,
  },
});
