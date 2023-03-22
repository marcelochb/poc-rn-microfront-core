import { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { IApiClient, CoreConstants } from "../../../../core";
import {  IPaymentDatasource, PaymentModel } from "../../infra";

interface IProps {
  id: string;
}
@injectable()
export class PaymentDatasource implements IPaymentDatasource {
  constructor(
    @inject(CoreConstants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}
  async getList(): Promise<PaymentModel[]> {
    const response =  await this.apiClient.get<PaymentModel[]>('/payment');
    return response.data.map(body => PaymentModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<PaymentModel> {
    const response =  await this.apiClient.get<PaymentModel>(`/payment/${id}`);
    return PaymentModel.fromMap(response.data);
  }

  
}