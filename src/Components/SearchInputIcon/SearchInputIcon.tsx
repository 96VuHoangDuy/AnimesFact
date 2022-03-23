import {
  View,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
import React, {useCallback} from 'react';
import colors from 'utils/colors';
import Icon from 'Components/Icon/Icon';
import {observer} from 'mobx-react';
import animeListStore from 'store/AnimeList.store';

const SearchInputIcon = () => {
  const onSearchAnimeWithName = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      animeListStore.searchAnime(event.nativeEvent.text);
    },
    [],
  );
  return (
    <View style={styles.wrapInput}>
      <Icon
        name="search-outline"
        type="Ionicons"
        color={colors.white}
        size={25}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={colors.grey}
        placeholder="Bleach, Black Clover, Naruto..."
        style={styles.input}
        onChange={onSearchAnimeWithName}
      />
    </View>
  );
};

export default observer(SearchInputIcon);

const styles = StyleSheet.create({
  wrapInput: {
    width: '80%',
    justifyContent: 'center',
    backgroundColor: colors.uncheck,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.Grey,
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 20,
    color: colors.white,
    zIndex: 9,
  },
  icon: {
    position: 'absolute',
    left: 6,
    top: 6,
    zIndex: 10,
  },
});
