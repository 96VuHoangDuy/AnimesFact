import {useCallback} from 'react';
import animeListStore from 'store/AnimeList.store';

const useAnimeStore = () => {
  const listAnime = animeListStore.listAnime;
  const fetchStatusAnimeStore = animeListStore.fetch_status;
  const favoriteAnimes = animeListStore.favoriteAnimes;
  const searchedAnime = animeListStore.listSearchAnime;

  const onFetchNewAnimeList = useCallback(() => {
    animeListStore.fetchNew();
  }, []);

  const onFetchNextAnimeList = useCallback(() => {
    animeListStore.fetchNext();
  }, []);

  return {
    listAnime,
    fetchStatusAnimeStore,
    onFetchNewAnimeList,
    onFetchNextAnimeList,
    favoriteAnimes,
    searchedAnime,
  };
};

export default useAnimeStore;
