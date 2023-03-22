/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, CoreConstants } from "../../../../../core";
import { GetByLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanDetailDependences = () => {
  container.register(CoreConstants.IApiClient,{useValue: new ApiClient()});
  container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(CoreConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(CoreConstants.GetByLoanUsecase,{useClass: GetByLoanUsecase});
}