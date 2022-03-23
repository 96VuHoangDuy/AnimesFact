import axios from 'axios';
import {GET_ANIME_LIST_END_POINT} from './anime.api.endpoint';
import {GET_ANIME_LIST_RESPONSE} from './anime.api.types';

export function getAnimeListAPI() {
  return axios.get<GET_ANIME_LIST_RESPONSE>(GET_ANIME_LIST_END_POINT);
}
