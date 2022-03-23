export type ANIME_DATA_TYPE = {
  anime_id: number;
  anime_name: string;
  anime_img: string;
};

export type ANIME_FACT_TYPE = {
  fact: string;
  fact_id: number;
};

export type GET_ANIME_LIST_RESPONSE = {
  success: boolean;
  data: Array<ANIME_DATA_TYPE>;
};

export type GET_ANIME_FACT_RESPONSE = {
  img: string;
  success: boolean;
  total_facts: number;
  data: ANIME_FACT_TYPE[];
};
