/* istanbul ignore file */
// import { Container } from "inversify";
import { Container } from "inversify";
import { FetchApiClient, CoreConstants } from "../../../core";
import { CreateLoanUsecase, GetByLoanUsecase, GetListLoanUsecase, ICreateLoanUsecase, IGetByLoanUsecase, IGetListLoanUsecase, ILoanRepository } from "../domain";
import { LoanDatasource } from "../external";
import { ILoanDatasource, LoanRepository } from "../infra";
import { IApiClient } from "@poc/interfaces";


export const loanBind = new Container();
loanBind.bind<IApiClient>(CoreConstants.IApiClient).to(FetchApiClient);
loanBind.bind<ICreateLoanUsecase>(CoreConstants.CreateLoanUsecase).to(CreateLoanUsecase);
loanBind.bind<IGetByLoanUsecase>(CoreConstants.GetByLoanUsecase).to(GetByLoanUsecase);
loanBind.bind<IGetListLoanUsecase>(CoreConstants.GetListLoanUsecase).to(GetListLoanUsecase);
loanBind.bind<ILoanDatasource>(CoreConstants.ILoanDatasource).to(LoanDatasource);
loanBind.bind<ILoanRepository>(CoreConstants.ILoanRepository).to(LoanRepository);
