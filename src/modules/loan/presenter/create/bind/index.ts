/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, LoanConstants } from "../../../../../core";
import { CreateLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanCreateDependences = () => {
  container.register(LoanConstants.IApiClient,{useValue: new ApiClient()});
  container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(LoanConstants.CreateLoanUsecase,{useClass: CreateLoanUsecase});
}