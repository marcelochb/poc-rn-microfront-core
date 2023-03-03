import { IControllerGetData } from "@poc/interfaces";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { LoanConstants } from "../../../../../core";
import { IGetByLoanUsecase, LoanEntity } from "../../../domain";
import { loanDetailDependences } from "../bind";
import { ILoanDetailNavigationRoute } from "../models";

loanDetailDependences();
export const useLoanDetailController = ():IControllerGetData<LoanEntity> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loan, setLoan] = useState<LoanEntity>({} as LoanEntity);
  const useCase = container.resolve<IGetByLoanUsecase>(LoanConstants.GetByLoanUsecase);
  const route = useRoute<ILoanDetailNavigationRoute>();
  useEffect(
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