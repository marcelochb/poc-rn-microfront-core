import { LoanEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { LoanConstants } from "../../../../core/constants";
import { ILoanRepository } from "../repositories";

export interface IGetListLoanUsecase {
  call():Promise<LoanEntity[]>;
}

@injectable()
export class GetListLoanUsecase implements IGetListLoanUsecase {

  constructor(
    @inject(LoanConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call(): Promise<LoanEntity[]> {
    return await this.repository.getList();
  }

}