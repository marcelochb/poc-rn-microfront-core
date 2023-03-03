import { LoanEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { ILoanRepository } from "../repositories";
import { LoanConstants } from "../../../../core";

export interface ICreateLoanUsecase {
  call(loan:LoanEntity):Promise<void>;
}

@injectable()
export class CreateLoanUsecase implements ICreateLoanUsecase {

  constructor(
    @inject(LoanConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call(loan:LoanEntity): Promise<void> {
    await this.repository.create(loan);
  }

}