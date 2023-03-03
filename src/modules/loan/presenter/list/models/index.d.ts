import { IControllerGetData } from "@poc/interfaces";
import { LoanEntity } from "../../../domain";

export function useLoanListController():IControllerGetData<LoanEntity[]>;