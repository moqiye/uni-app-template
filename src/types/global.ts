export interface IResponse<T> {
  data: T;
  status: string;
  msg: string;
  code: number;
  total: number;
}