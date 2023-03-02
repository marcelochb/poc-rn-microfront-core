import { inject, injectable } from "tsyringe";
import { LoanConstants } from "../../../../core/constants";
import { ILoanRepository, LoanEntity } from "../../domain";
import { ILoanDatasource } from "../datasources";
import { LoanModel } from "../models";

interface IProps {
  id: string;
}
@injectable()
export class LoanRepository implements ILoanRepository {
  constructor(
    @inject(LoanConstants.ILoanDatasource)
    private readonly datasource: ILoanDatasource
  ) {}

  async create(loan: LoanEntity): Promise<LoanEntity> {
    const model = LoanModel.fromEntity(loan);
    return await this.datasource.create(model);
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