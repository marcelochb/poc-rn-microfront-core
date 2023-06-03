/* istanbul ignore file */
import { IControllerGetData } from "@poc/interfaces";
import { RouteProp } from "@react-navigation/native";
import { LoanEntity } from "../../../domain";

export const useLoanDetailController: IControllerGetData<LoanEntity>;