import { InternalAxiosRequestConfig } from "axios";
import { AxiosResponse } from "axios";
import { LoanEntity } from "../../domain";
import { LoanModel } from "../../infra";
export const loanModel = new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: 'R$ 10'});
export const loanModelList = [loanModel];
export const loanEntity = new LoanEntity({id:'1', name: 'teste', type: 'tipo', amount: 'R$ 10'});
export const loanEntityList = [loanEntity];
export const getListMock:AxiosResponse<LoanModel[], any> = {
  data:[new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: '10'})],
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}
export const getByMock:AxiosResponse<LoanModel, any> = {
  data:new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: '10'}),
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}