import { AxiosResponse } from "axios";
import { HttpClient } from "../http/HttpClient";
 export interface IBaseRepository<T> {
  get(id: string): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: string, item: T): Promise<ApiResponse<T>>;
  delete(id: string): Promise<ApiResponse<T>>;
}

export class ApiResponse<T> {
  data?: T;
  succeeded?: boolean;
  errors?: any;
}

const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
  const isPaginated = response.data?.TotalCount !== undefined && response.data?.Students !== undefined;
  return Promise.resolve({
    data: isPaginated ? response.data.Students : response.data,
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
    return instance.delete(`${this.collection}/Delete/${id}`).then(transform);
  }
}
