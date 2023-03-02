import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IApiClient {
  get<T>(url:string): Promise<AxiosResponse<T>| Error>;
  post<T>(body:T): Promise<AxiosResponse<T> | Error>;
}

export class ApiClient implements IApiClient {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
    })
  }
  async post<T>(body: T): Promise<Error | AxiosResponse<T, any>> {
    try {
      await this.api.post<T>('/post',body);
      return body as AxiosResponse<T>;
    } catch (error) {
      throw error
    }
  }

  async get<T>(url:string): Promise<Error | AxiosResponse<T, any>> {
    try {
      return await this.api.get<T>(url);
    } catch (error) {
      throw error
    }
  }

}