import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface IApiClient {
  get<T>(url:string): Promise<AxiosResponse<T>| Error>;
}

export class ApiClient implements IApiClient {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
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