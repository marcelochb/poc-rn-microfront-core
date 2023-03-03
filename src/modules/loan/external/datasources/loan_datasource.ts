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
  async create(loan: LoanModel): Promise<void> {
    await this.apiClient.post<LoanModel>(loan);
  }
  async getList(): Promise<LoanModel[]> {
    const response =  await this.apiClient.get<LoanModel[]>('/loan');
    return response.data.map(body => LoanModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<LoanModel> {
    const response =  await this.apiClient.get<LoanModel>(`/loan/${id}`);
    return LoanModel.fromMap(response.data);
  }

  
}