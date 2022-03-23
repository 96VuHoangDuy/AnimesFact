import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {FETCH_STATUS} from 'constants/fetch';
import {ROUTES_TYPES} from 'constants/routes';
import {RootStackParamsList} from 'navigator/RootStackTypes';
import {useCallback, useEffect, useMemo} from 'react';
import {FactAnimeStore} from 'store/FactAnime.store';

export type CommunityScreenRouteProp = RouteProp<
  RootStackParamsList,
  ROUTES_TYPES['FACT_ANIME']
>;

const useLogicAnimeFact = () => {
  const route = useRoute<CommunityScreenRouteProp>();
  const navigation = useNavigation();

  const store = useMemo(
    () => FactAnimeStore.provideStore(route.params?.animeName),
    [route.params?.animeName],
  );

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const titleHeader = useMemo(
    () => route.params?.animeName.replace(/_/g, ' ').toUpperCase(),
    [route.params?.animeName],
  );

  useEffect(() => {
    !store.animeFact && store.fetchAnimeFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    animeFact: store.animeFact,
    titleHeader,
    onGoBack,
    isFetchingData: store.fetch_status === FETCH_STATUS.FETCHING,
  };
};

export default useLogicAnimeFact;
