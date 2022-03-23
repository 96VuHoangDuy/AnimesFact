import {AxiosResponse} from 'axios';
import {action, computed, flow, makeAutoObservable, observable} from 'mobx';

import {FETCH_STATUS} from 'constants/fetch';
import {
  ANIME_DATA_TYPE,
  GET_ANIME_LIST_RESPONSE,
} from 'api/AnimeAPI/anime.api.types';
import {getAnimeListAPI} from 'api/AnimeAPI/anime.api';

export class AnimeItemStoreData {
  animeData: ANIME_DATA_TYPE;
  isFavorite: boolean;
  constructor(data: ANIME_DATA_TYPE) {
    this.animeData = data;
    this.isFavorite = false;

    makeAutoObservable(this, {
      animeData: observable,
      isFavorite: observable,
      like: action,
      unFavorite: action,
    });
  }

  like() {
    this.isFavorite = true;
  }

  unFavorite() {
    this.isFavorite = false;
  }
}

export class AnimeListStore {
  listAnime: AnimeItemStoreData[];
  listSearchAnime: AnimeItemStoreData[];

  fetch_status: string = FETCH_STATUS.IDLE;

  constructor() {
    this.listAnime = [];
    this.listSearchAnime = [];

    makeAutoObservable(this, {
      listAnime: observable,
      fetch_status: observable,
      listSearchAnime: observable,

      favoriteAnimes: computed,

      setFetchStatus: action,
      searchAnime: action,

      fetchAnimeList: flow,
      fetchNew: flow,
      fetchNext: flow,
      refresh: flow,
    });
  }

  get favoriteAnimes() {
    return this.listAnime.filter(anime => anime.isFavorite);
  }

  searchAnime(animeName: string) {
    if (!animeName || animeName === '') {
      this.listSearchAnime = [];
      return;
    }
    this.listSearchAnime = this.listAnime.filter(anime => {
      return anime.animeData.anime_name.includes(animeName.toLowerCase());
    });
  }

  setFetchStatus(status: string) {
    this.fetch_status = status;
  }

  *fetchAnimeList(modeFetch: string) {
    if (this.fetch_status !== FETCH_STATUS.IDLE) {
      return;
    }
    try {
      this.setFetchStatus(modeFetch);

      const response: AxiosResponse<GET_ANIME_LIST_RESPONSE> =
        yield getAnimeListAPI();

      console.log(response, 'response');

      return convertAnimeData(response.data.data);
    } catch (error) {
    } finally {
      this.setFetchStatus(FETCH_STATUS.IDLE);
    }
  }

  *fetchNew() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.FETCH_NEW);
    if (!animeList) {
      return;
    }
    this.listAnime = animeList;
  }

  *refresh() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.REFRESH);
    if (!animeList) {
      return;
    }
    this.listAnime = animeList;
  }

  *fetchNext() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.FETCH_NEXT);
    if (!animeList) {
      return;
    }
    // this.listAnime = animeList;
  }
}

const convertAnimeData = (listAnimeResponse: ANIME_DATA_TYPE[]) => {
  const listAnimeDataConverted = listAnimeResponse.map(
    anime => new AnimeItemStoreData(anime),
  );

  return listAnimeDataConverted;
};

const animeListStore = new AnimeListStore();

export default animeListStore;
