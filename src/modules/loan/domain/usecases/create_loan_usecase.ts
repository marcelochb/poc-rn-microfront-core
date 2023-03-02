import { LoanEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { ILoanRepository } from "../repositories";
import { LoanConstants } from "../../../../core";

export interface ICreateLoanUsecase {
  call(loan:LoanEntity):Promise<LoanEntity>;
}

@injectable()
export class CreateLoanUsecase implements ICreateLoanUsecase {

  constructor(
    @inject(LoanConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call(loan:LoanEntity): Promise<LoanEntity> {
    return await this.repository.create(loan);
  }

}