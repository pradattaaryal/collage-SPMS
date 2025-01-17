import { AxiosResponse } from "axios";
import { HttpClient } from "../http/HttpClient";
 export interface IBaseRepository<T> {
  get(id: string): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: string, item: T): Promise<ApiResponse<T>>;
  delete(id: string): Promise<ApiResponse<T>>;
}

export class ApiResponse<ITodo> {
  data?: ITodo;
  succeeded?: boolean;
  errors?: any;
}

const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
  return Promise.resolve({
    data: response.data.data,
    succeeded: response.status === 200?true:false,
    errors: response.data?.errors || null,
  });
};

export abstract class BaseRepository<T> extends HttpClient implements IBaseRepository<T> {
  protected collection: string | undefined;

  async get(id: string): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    return instance.get(`${this.collection}/${id}`).then(transform);
  }

  async getMany(): Promise<ApiResponse<T[]>> {
    const instance = this.createInstance();
    return instance.get(`${this.collection}`).then(transform);
  }

  async create(item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    return instance.post(`${this.collection}`, item).then(transform);
  }

  async update(id: string, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    return instance.put(`${this.collection}/${id}`, item).then(transform);
  }

  async delete(id: string): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    return instance.delete(`${this.collection}/${id}`).then(transform);
  }
}
