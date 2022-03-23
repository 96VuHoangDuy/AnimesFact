import React, {memo} from 'react';
import Header from 'Components/Header/Header';
import colors from 'utils/colors';
import SearchInputIcon from 'Components/SearchInputIcon/SearchInputIcon';
import {View} from 'react-native';
import CommonStyles from 'theme/CommonStyles';

type AnimeListHeaderType = {
  toggleShowFavoriteAnime: () => void;
  isShowFavoriteAnime: boolean;
};

const AnimeListHeader: React.FC<AnimeListHeaderType> = ({
  toggleShowFavoriteAnime,
  isShowFavoriteAnime,
}) => {
  return (
    <View style={CommonStyles.centerItem}>
      <Header
        titleHeader={isShowFavoriteAnime ? 'Favorite Animes' : 'Anime List'}
        iconRight={{
          name: isShowFavoriteAnime ? 'star' : 'star-outline',
          type: 'Ionicons',
          color: colors.Rajah,
          size: 24,
          onPress: toggleShowFavoriteAnime,
        }}
      />
      <SearchInputIcon />
    </View>
  );
};

export default memo(AnimeListHeader);
