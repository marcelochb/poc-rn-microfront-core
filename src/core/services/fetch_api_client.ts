/* istanbul ignore file */
import { IApiClient } from '@poc/interfaces';

export class FetchApiClient implements IApiClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000'
  }
  async post(url:string,body: any): Promise<void> {
    try {
      await fetch(this.baseUrl+url,{
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    } catch (error) {
      throw error
    }
  }

  async get(url:string): Promise<any> {
    try {
      var response = await fetch(this.baseUrl+url);
      return await response.json();
    } catch (error) {
      throw error
    }
  }

}