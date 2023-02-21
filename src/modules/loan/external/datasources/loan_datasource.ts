import { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { IApiClient, LoanConstants } from "../../../../core";
import { ILoanDatasource, LoanModel } from "../../infra";

interface IProps {
  id: string;
}
@injectable()
export class LoanDatasource implements ILoanDatasource {
  constructor(
    @inject(LoanConstants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}
  async getList(): Promise<LoanModel[]> {
    const response =  await this.apiClient.get<LoanModel[]>('/loan') as AxiosResponse<LoanModel[]>;
    return response.data.map(body => LoanModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<LoanModel> {
    const response =  await this.apiClient.get<LoanModel>(`/loan/${id}`) as AxiosResponse<LoanModel>;
    return LoanModel.fromMap(response);
  }

  
}