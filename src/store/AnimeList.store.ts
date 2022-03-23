import {AxiosResponse} from 'axios';
import {action, flow, makeAutoObservable, observable} from 'mobx';

import {FETCH_STATUS} from 'constants/fetch';
import {GET_ANIME_LIST_RESPONSE} from 'api/AnimeAPI/anime.api.types';
import {getAnimeListAPI} from 'api/AnimeAPI/anime.api';

export class AnimeListStore {
  listAnime: any[];

  fetch_status: string = FETCH_STATUS.IDLE;

  constructor() {
    this.listAnime = [];

    makeAutoObservable(this, {
      listAnime: observable,
      setFetchStatus: action,
      fetchAnimeList: flow,
      fetchNew: flow,
      fetchNext: flow,
      refresh: flow,
    });
  }

  setFetchStatus(status: string) {
    this.fetch_status = status;
  }

  *fetchAnimeList(modeFetch: string) {
    // if (this.fetch_status !== FETCH_STATUS.IDLE) {
    //   return;
    // }
    this.setFetchStatus(modeFetch);

    const response: AxiosResponse<GET_ANIME_LIST_RESPONSE> =
      yield getAnimeListAPI();

    console.log(response, 'response');

    this.listAnime = response.data.data;

    try {
      this.setFetchStatus(FETCH_STATUS.IDLE);

      // return response.data.data.items;
    } catch (error) {
      this.setFetchStatus(FETCH_STATUS.IDLE);
    }
  }

  *fetchNew() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.FETCH_NEW);
    if (!animeList) {
      return;
    }
    // this.list = convertCategory(communities);
  }

  *refresh() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.REFRESH);
    if (!animeList) {
      return;
    }
    // this.list = convertCategory(communities);
  }

  *fetchNext() {
    const animeList: any[] = yield this.fetchAnimeList(FETCH_STATUS.FETCH_NEXT);
    if (!animeList) {
      return;
    }
  }
}

const animeListStore = new AnimeListStore();

export default animeListStore;
