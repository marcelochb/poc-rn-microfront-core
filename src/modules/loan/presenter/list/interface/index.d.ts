/* istanbul ignore file */
import { IControllerGetData, IControllerGetDataReturn } from "@poc/interfaces";
import { LoanEntity } from "../../../domain";

export const useLoanListController:IControllerGetData<LoanEntity[]>;