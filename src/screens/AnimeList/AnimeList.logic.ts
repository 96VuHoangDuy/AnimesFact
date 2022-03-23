import useLogicListAnimeStore from 'hooks/useLogicListAnimeStore';
import {useEffect} from 'react';

const useLogicAnimeList = () => {
  const {listAnime, onFetchNewAnimeList} = useLogicListAnimeStore();
  console.log(listAnime, 'listAnime');

  useEffect(() => {
    onFetchNewAnimeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {listAnime};
};

export default useLogicAnimeList;
