import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PixEntity } from "../../domain";
import { PixModel } from "../../infra/models";
export const pixEntity = new PixEntity({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: 'R$ 10'});
export const pixEntityList = [pixEntity];
export const pixModel = new PixModel({id: '1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: 'R$ 10'});
export const pixModelList = [pixModel];
// export const getListPaymentMock:AxiosResponse<PaymentModel[], any> = {
//   data:[new PaymentModel({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: '10'})],
//   status: 200,
//   config: {} as InternalAxiosRequestConfig,
//   headers: {},
//   statusText: ''
// }
// export const getByPaymentMock:AxiosResponse<PaymentModel, any> = {
//   data:new PaymentModel({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: '10'}),
//   status: 200,
//   config: {} as InternalAxiosRequestConfig,
//   headers: {},
//   statusText: ''
// }