import { LoanEntity } from "../entities";
import { inject, injectable } from "inversify";
import { ILoanRepository } from "../repositories";
import { CoreConstants } from "../../../../core";

export interface ICreateLoanUsecase {
  call(loan:LoanEntity):Promise<void>;
}

@injectable()
export class CreateLoanUsecase implements ICreateLoanUsecase {

  constructor(
    @inject(CoreConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call(loan:LoanEntity): Promise<void> {
    await this.repository.create(loan);
  }

}