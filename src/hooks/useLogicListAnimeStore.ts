import {useCallback} from 'react';
import animeListStore from 'store/AnimeList.store';

const useLogicListAnimeStore = () => {
  const listAnime = animeListStore.listAnime;
  const fetchStatusAnimeStore = animeListStore.fetch_status;

  const onFetchNewAnimeList = useCallback(() => {
    animeListStore.fetchNew();
  }, []);

  const onFetchNextAnimeList = useCallback(() => {
    animeListStore.fetchNext();
  }, []);

  const onRefreshAnimeList = useCallback(() => {
    animeListStore.refresh();
  }, []);

  return {
    listAnime,
    fetchStatusAnimeStore,
    onFetchNewAnimeList,
    onFetchNextAnimeList,
    onRefreshAnimeList,
  };
};

export default useLogicListAnimeStore;
