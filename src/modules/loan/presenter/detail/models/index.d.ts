import { RouteProp } from "@react-navigation/native";
import { LoanEntity } from "../../../domain";

type ModelOfLoanDetailNavigationParams ={
  params: {
    id: string;
  }
}

type ModelOfLoanDetailNavigationRoute = RouteProp<ModelOfLoanDetailNavigationParams, 'params'>;

type returnLoanDetailController = {
  getController: {
    loading: boolean;
    error: boolean;
    loan: LoanEntity;
  }
}

export function useLoanDetailController(): returnLoanDetailController;