export type ANIME_DATA_TYPE = {
  anime_id: number;
  anime_name: string;
  anime_img: string;
};

export type GET_ANIME_LIST_RESPONSE = {
  success: boolean;
  data: Array<ANIME_DATA_TYPE>;
};
