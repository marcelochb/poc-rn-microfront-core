import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PixEntity } from "../../domain";
import { PixModel } from "../../infra/models";
export const pixEntity = new PixEntity({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: 'R$ 10'});
export const pixEntityList = [pixEntity];
export const pixModel = new PixModel({id: '1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: 'R$ 10'});
export const pixModelList = [pixModel];
export const getListPixMock:AxiosResponse<PixModel[], any> = {
  data:[new PixModel({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: '10'})],
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}
export const getByPixMock:AxiosResponse<PixModel, any> = {
  data:new PixModel({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: '10'}),
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}