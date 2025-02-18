export interface HttpRes<T = object> {
    status: number;
    msg: string;
    data: T;
  }