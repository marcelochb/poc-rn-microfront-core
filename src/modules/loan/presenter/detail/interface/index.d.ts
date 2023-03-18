/* istanbul ignore file */
import { IControllerGetData } from "@poc/interfaces";
import { RouteProp } from "@react-navigation/native";
import { LoanEntity } from "../../../domain";

type ILoanDetailNavigationParams ={
  params: {
    id: string;
  }
}

type ILoanDetailNavigationRoute = RouteProp<ILoanDetailNavigationParams, 'params'>;

export function useLoanDetailController(): IControllerGetData<LoanEntity>;