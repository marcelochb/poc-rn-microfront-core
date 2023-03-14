import { InternalAxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { LoanModel } from "../../infra";
export const dataResponse = [new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: 'R$ 10'})]
export const getListMock:AxiosResponse<LoanModel[], any> = {
  data:[new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: '10'})],
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}