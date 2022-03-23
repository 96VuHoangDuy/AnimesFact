import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import TitleText from 'Components/Base/TitleText';
import CommonStyles from 'theme/CommonStyles';
import FastImageLoader from 'Components/Base/FastImageLoader/FastImageLoader';
import colors from 'utils/colors';
import Space from 'Components/Base/Space';
import Screen from 'utils/screen';
import Icon from 'Components/Icon/Icon';
import {AnimeItemStoreData} from 'store/AnimeList.store';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'constants/routes';

type ItemCardAnimeProps = {
  data: AnimeItemStoreData;
};

export const IMAGE_SIZE = {
  width: Screen.width * 0.8,
  height: Screen.height * 0.6,
};

const ItemCardAnime: React.FC<ItemCardAnimeProps> = ({data}) => {
  const navigation = useNavigation();

  const toggleFavoriteAnime = useCallback(() => {
    data.isFavorite ? data.unFavorite() : data.like();
  }, [data]);

  const animeName = useMemo(
    () => data.animeData?.anime_name.replace(/_/g, ' ').toUpperCase(),
    [data.animeData?.anime_name],
  );

  const onNavigateToFactAnime = useCallback(() => {
    navigation.push(ROUTES.FACT_ANIME, {animeName: data.animeData.anime_name});
  }, [data.animeData.anime_name, navigation]);

  return (
    <TouchableWithoutFeedback onPress={onNavigateToFactAnime}>
      <View style={styles.containerItem}>
        <View style={styles.icon}>
          <Icon
            name={data.isFavorite ? 'star' : 'star-outline'}
            type="Ionicons"
            color={colors.Rajah}
            size={24}
            onPress={toggleFavoriteAnime}
          />
        </View>
        <FastImageLoader
          style={styles.imageStyle}
          source={{uri: data.animeData?.anime_img}}
        />

        <Space width={10} />

        <TitleText color={colors.Froly} level="h2">
          {animeName}
        </TitleText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default observer(ItemCardAnime);

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: CommonStyles.spaceDefault / 2,
  },
  imageStyle: {
    ...IMAGE_SIZE,
    borderRadius: 5,
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
});
