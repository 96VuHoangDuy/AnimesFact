import axios from 'axios';
import {GET_ALL_ANIME} from './animes.api.endpoint';

export function getCategoryListAPI() {
  return axios.get<any>(GET_ALL_ANIME);
}
