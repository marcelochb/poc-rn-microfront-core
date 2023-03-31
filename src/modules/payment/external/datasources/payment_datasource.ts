import { IApiClient } from "@poc/interfaces";
import { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { CoreConstants } from "../../../../core";
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
    const response =  await this.apiClient.get('/payment');
    return response.map((body:any) => PaymentModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<PaymentModel> {
    const response =  await this.apiClient.get(`/payment/${id}`);
    return PaymentModel.fromMap(response);
  }

  
}