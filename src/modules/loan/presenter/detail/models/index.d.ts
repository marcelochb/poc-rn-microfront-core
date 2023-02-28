import { IController } from "@poc/interfaces";
import { RouteProp } from "@react-navigation/native";
import { LoanEntity } from "../../../domain";

type ModelOfLoanDetailNavigationParams ={
  params: {
    id: string;
  }
}

type ModelOfLoanDetailNavigationRoute = RouteProp<ModelOfLoanDetailNavigationParams, 'params'>;

export function useLoanDetailController(): IController<LoanEntity>;