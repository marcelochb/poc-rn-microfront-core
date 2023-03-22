import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PaymentEntity } from "../../domain";
import { PaymentModel } from "../../infra/models";
export const paymentEntity = new PaymentEntity({id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: 'R$ 10'});
export const paymentEntityList = [paymentEntity];
export const paymentModel = new PaymentModel({id: '1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: 'R$ 10'});
export const paymentModelList = [paymentModel];
export const getListPaymentMock:AxiosResponse<PaymentModel[], any> = {
  data:[new PaymentModel({id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: '10'})],
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}
export const getByPaymentMock:AxiosResponse<PaymentModel, any> = {
  data:new PaymentModel({id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: '10'}),
  status: 200,
  config: {} as InternalAxiosRequestConfig,
  headers: {},
  statusText: ''
}