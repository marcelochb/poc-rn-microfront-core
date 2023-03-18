/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, LoanConstants } from "../../../../../core";
import { GetByLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanDetailDependences = () => {
  container.register(LoanConstants.IApiClient,{useValue: new ApiClient()});
  container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(LoanConstants.GetByLoanUsecase,{useClass: GetByLoanUsecase});
}