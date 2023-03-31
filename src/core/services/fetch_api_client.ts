/* istanbul ignore file */
import { IApiClient } from '@poc/interfaces';

export class FetchApiClient implements IApiClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000'
  }
  async post<T>(url:string,body: T): Promise<void> {
    try {
      // await this.baseUrl.post<T>(url,body);
      await fetch(this.baseUrl+url,{method: 'POST'})
    } catch (error) {
      throw error
    }
  }

  async get(url:string): Promise<any> {
    try {
      // var response = await this.baseUrl.get(url);
      var response = await fetch(this.baseUrl+url);
      return await response.json();
    } catch (error) {
      throw error
    }
  }

}