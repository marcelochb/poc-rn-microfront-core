import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IApiClient {
  get<T>(url:string): Promise<AxiosResponse<T>| Error>;
}

export class ApiClient implements IApiClient {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
    })
  }

  async get<T>(url:string): Promise<AxiosResponse<T, any>> {
    try {
      return await this.api.get<T>(url);
    } catch (error) {
      throw error
    }
  }

}