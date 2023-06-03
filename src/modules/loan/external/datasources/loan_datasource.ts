import { IApiClient } from "../../../../../../interfaces/src/apiclient";
import { inject, injectable } from "inversify";
import { CoreConstants } from "../../../../core";
import { ILoanDatasource, LoanModel } from "../../infra";

interface IProps {
  id: string;
}
@injectable()
export class LoanDatasource implements ILoanDatasource {
  constructor(
    @inject(CoreConstants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}
  async create(loan: LoanModel): Promise<void> {
    await this.apiClient.post('/loan',loan);
  }
  async getList(): Promise<LoanModel[]> {
    const response =  await this.apiClient.get('/loan');
    return response.map((body:any) => LoanModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<LoanModel> {
    const response =  await this.apiClient.get(`/loan/${id}`);
    return LoanModel.fromMap(response);
  }

  
}