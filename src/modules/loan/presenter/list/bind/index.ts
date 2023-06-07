/* istanbul ignore file */
import { container } from "tsyringe"
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { FetchApiClient } from "../../../../../core/services/fetch_api_client";
import { GetListLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanListDependences = () => {
  container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(CoreConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(CoreConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
}