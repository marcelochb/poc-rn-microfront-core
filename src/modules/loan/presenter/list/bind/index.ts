/* istanbul ignore file */
import { container } from "tsyringe"
import { Container } from "inversify";
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { GetListLoanUsecase, IGetListLoanUsecase, ILoanRepository } from "../../../domain";
import { LoanDatasource } from "../../../external";
import { ILoanDatasource, LoanRepository } from "../../../infra";
import { IApiClient } from "@poc/interfaces";

const loanListDependences = () => {
  // container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
  // container.register(CoreConstants.ILoanRepository,{useClass: LoanRepository});
  // container.register(CoreConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
  
}
const myContainer = new Container();
myContainer.bind<IApiClient>(CoreConstants.IApiClient).to(AxiosApiClient);
myContainer.bind<IGetListLoanUsecase>(CoreConstants.GetListLoanUsecase).to(GetListLoanUsecase);
myContainer.bind<ILoanDatasource>(CoreConstants.ILoanDatasource).to(LoanDatasource);
myContainer.bind<ILoanRepository>(CoreConstants.ILoanRepository).to(LoanRepository);

export {myContainer, loanListDependences}