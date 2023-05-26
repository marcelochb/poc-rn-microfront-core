import { inject, injectable } from "inversify";
import { CoreConstants } from "../../../../core/constants";
import { ILoanRepository, LoanEntity } from "../../domain";
import { ILoanDatasource } from "../datasources";
import { LoanModel } from "../models";

interface IProps {
  id: string;
}
@injectable()
export class LoanRepository implements ILoanRepository {
  constructor(
    @inject(CoreConstants.ILoanDatasource)
    private readonly datasource: ILoanDatasource
  ) {}

  async create(loan: LoanEntity): Promise<void> {
    const model = LoanModel.fromEntity(loan);
    await this.datasource.create(model);
  }

  async getList(): Promise<LoanEntity[]> {
    const response = await this.datasource.getList() as LoanModel[];
    return LoanModel.toEntityList(response);
  }
  
  async getBy({ id }: IProps): Promise<LoanEntity> {
    const response = await this.datasource.getBy({id});
    return LoanModel.toEntity(response);
  }

  
}