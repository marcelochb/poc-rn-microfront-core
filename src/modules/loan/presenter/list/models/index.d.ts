import { IController } from "@poc/interfaces";
import { LoanEntity } from "../../../domain";

export function useLoanListController():IController<LoanEntity[]>;