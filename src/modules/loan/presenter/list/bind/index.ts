/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, LoanConstants } from "../../../../../core";
import { GetListLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanListDependences = () => {
  container.register(LoanConstants.IApiClient,{useValue: new ApiClient()});
  container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(LoanConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
}