import {getAnimeFactAPI} from 'api/AnimeAPI/anime.api';
import {
  ANIME_FACT_TYPE,
  GET_ANIME_FACT_RESPONSE,
} from 'api/AnimeAPI/anime.api.types';
import {AxiosResponse} from 'axios';
import {FETCH_STATUS} from 'constants/fetch';
import {action, flow, makeAutoObservable, observable} from 'mobx';

export class FactAnimeStore {
  animeName: string;
  fetch_status: string = FETCH_STATUS.IDLE;
  animeFact?: ANIME_FACT_TYPE[];

  constructor(animeName: string) {
    this.animeName = animeName;

    makeAutoObservable(this, {
      fetch_status: observable,
      animeFact: observable,
      setFetchStatus: action,
      fetchAnimeFact: flow,
    });
  }

  setFetchStatus(status: string) {
    this.fetch_status = status;
  }

  *fetchAnimeFact() {
    try {
      this.setFetchStatus(FETCH_STATUS.FETCHING);

      const response: AxiosResponse<GET_ANIME_FACT_RESPONSE> =
        yield getAnimeFactAPI({
          animeName: this.animeName,
        });

      this.animeFact = response.data.data;
    } catch (error) {
    } finally {
      this.setFetchStatus(FETCH_STATUS.IDLE);
    }
  }

  static currentKey?: string;

  static store: Record<string, FactAnimeStore> = {};

  static provideStore(animeName: string) {
    if (FactAnimeStore.currentKey === animeName) {
      if (!FactAnimeStore.store[animeName]) {
        FactAnimeStore.store[animeName] = new FactAnimeStore(animeName);
      }
      return FactAnimeStore.store[animeName];
    }
    const store = new FactAnimeStore(animeName);
    FactAnimeStore.store[animeName] = store;
    FactAnimeStore.currentKey = animeName;
    return store;
  }
}
