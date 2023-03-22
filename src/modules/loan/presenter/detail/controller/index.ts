import { IControllerGetData } from "@poc/interfaces";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetByLoanUsecase, LoanEntity } from "../../../domain";
import { loanDetailDependences } from "../bind";
import { ILoanDetailNavigationRoute } from "../interface";

loanDetailDependences();
export const useLoanDetailController:IControllerGetData<LoanEntity> = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loan, setLoan] = React.useState<LoanEntity>({} as LoanEntity);
  const useCase = container.resolve<IGetByLoanUsecase>(CoreConstants.GetByLoanUsecase);
  const route = useRoute<ILoanDetailNavigationRoute>();
  React.useEffect(
    () => {
      const loadData = async () => {
        try {
          setError(false);
          setLoading(true);
          const response = await useCase.call({id: route.params.id});
          setLoan(response);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
      loadData();
    },[]
  )

  return {loading, error, data:loan}
}