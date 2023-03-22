import { LoanEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { ILoanRepository } from "../repositories";
import { CoreConstants } from "../../../../core";
interface IProps {
  id: string;
}
export interface IGetByLoanUsecase {
  call({id}:IProps):Promise<LoanEntity>;
}

@injectable()
export class GetByLoanUsecase implements IGetByLoanUsecase {

  constructor(
    @inject(CoreConstants.ILoanRepository)
    private readonly repository: ILoanRepository
  ) {}

  async call({id}:IProps): Promise<LoanEntity> {
    return await this.repository.getBy({id});
  }

}