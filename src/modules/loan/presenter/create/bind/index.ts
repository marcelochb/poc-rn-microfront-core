/* istanbul ignore file */
import { container } from "tsyringe"
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { CreateLoanUsecase } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { LoanRepository } from "../../../infra";

export const loanCreateDependences = () => {
  container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
  container.register(CoreConstants.ILoanRepository,{useClass: LoanRepository});
  container.register(CoreConstants.CreateLoanUsecase,{useClass: CreateLoanUsecase});
}