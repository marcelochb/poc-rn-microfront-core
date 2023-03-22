import { LoanEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { ILoanRepository } from "../repositories";
import { CoreConstants } from "../../../../core";

export interface IGetListLoanUsecase {
  call():Promise<LoanEntity[]>;
}

@injectable()
export class GetListLoanUsecase implements IGetListLoanUsecase {

  constructor(
    @inject(CoreConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call(): Promise<LoanEntity[]> {
    return await this.repository.getList();
  }

}