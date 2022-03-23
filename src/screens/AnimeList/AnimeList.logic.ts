import {FETCH_STATUS} from 'constants/fetch';
import useAnimeStore from 'hooks/useLogicListAnimeStore';
import {useCallback, useEffect, useState} from 'react';

const useLogicAnimeList = () => {
  const {
    listAnime,
    onFetchNewAnimeList,
    favoriteAnimes,
    fetchStatusAnimeStore,
    searchedAnime,
  } = useAnimeStore();

  const [isShowFavoriteAnime, setShowFavoriteAnime] = useState<boolean>(false);

  const toggleShowFavoriteAnime = useCallback(() => {
    setShowFavoriteAnime(isShow => !isShow);
  }, []);

  const isFetchingData =
    fetchStatusAnimeStore === FETCH_STATUS.FETCH_NEW ||
    fetchStatusAnimeStore === FETCH_STATUS.REFRESH;

  useEffect(() => {
    onFetchNewAnimeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    listAnime,
    favoriteAnimes,
    fetchStatusAnimeStore,
    isFetchingData,
    isShowFavoriteAnime,
    toggleShowFavoriteAnime,
    searchedAnime,
  };
};

export default useLogicAnimeList;
