/* istanbul ignore file */
import { IApiClient } from '@poc/interfaces';
import axios, { AxiosInstance } from 'axios';

export class AxiosApiClient implements IApiClient {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
    })
  }
  async post(url:string,body: any): Promise<void> {
    try {
      await this.api.post(url,body);
    } catch (error) {
      throw error
    }
  }

  async get(url:string): Promise<any> {
    try {
      var response = await this.api.get(url);
      return response.data;
    } catch (error) {
      throw error
    }
  }

}