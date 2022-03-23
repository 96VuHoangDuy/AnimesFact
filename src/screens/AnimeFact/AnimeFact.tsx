import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {observer} from 'mobx-react';
import useLogicAnimeFact from './AnimeFact.useLogic';
import {ANIME_FACT_TYPE} from 'api/AnimeAPI/anime.api.types';
import TitleText from 'Components/Base/TitleText';
import CommonStyles from 'theme/CommonStyles';
import Header from 'Components/Header/Header';
import Space from 'Components/Base/Space';
import colors from 'utils/colors';

const AnimeFact = () => {
  const {animeFact, titleHeader, onGoBack, isFetchingData} =
    useLogicAnimeFact();

  const ItemAnime = useCallback(
    ({item, index}: {item: ANIME_FACT_TYPE; index: number}) => {
      return <TitleText children={`${index + 1}.${item.fact}`} />;
    },
    [],
  );

  const keyExtractor = useCallback((item: ANIME_FACT_TYPE) => item.fact, []);

  const ItemSeparatorComponent = useCallback(() => <Space height={10} />, []);

  return (
    <>
      <Space height={10} />
      <Header
        titleHeader={`${titleHeader} FACT`}
        iconRight={{
          name: 'close',
          type: 'Ionicons',
          color: colors.Black,
          size: 25,
          onPress: onGoBack,
        }}
      />
      <FlatList
        contentContainerStyle={styles.containerList}
        keyExtractor={keyExtractor}
        renderItem={ItemAnime}
        refreshControl={<RefreshControl refreshing={isFetchingData} />}
        data={animeFact}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </>
  );
};

export default observer(AnimeFact);

const styles = StyleSheet.create({
  containerList: {padding: CommonStyles.spaceDefault},
});
