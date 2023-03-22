/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, CoreConstants } from "../../../../../core";
import { GetListLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanListDependences = () => {
  container.register(CoreConstants.IApiClient,{useValue: new ApiClient()});
  container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(CoreConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(CoreConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
}