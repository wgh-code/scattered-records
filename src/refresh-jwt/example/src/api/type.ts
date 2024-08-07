export interface LoginVO extends CommonRespVO {
  token: string;
  refresh_token: string;
}

export interface GetListVO extends CommonRespVO {
  total: number;
  list: List[];
}

export interface List {
  goods: string;
  price: number;
}
