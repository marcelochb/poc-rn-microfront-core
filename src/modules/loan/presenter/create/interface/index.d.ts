import { IControllerFormData } from "@poc/interfaces";
import { LoanEntity } from "../../../domain";

export function useLoanCreateController(callBack:Function):IControllerFormData<LoanEntity> {};