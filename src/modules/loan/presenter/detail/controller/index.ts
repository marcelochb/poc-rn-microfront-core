import { IController } from "@poc/interfaces";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { LoanConstants } from "../../../../../core";
import { IGetByLoanUsecase, LoanEntity } from "../../../domain";
import { loanDetailDependences } from "../bind";
import { ModelOfLoanDetailNavigationRoute } from "../models";

loanDetailDependences();
export const useLoanDetailController = ():IController<LoanEntity> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loan, setLoan] = useState<LoanEntity>({} as LoanEntity);
  const useCase = container.resolve<IGetByLoanUsecase>(LoanConstants.GetByLoanUsecase);
  const route = useRoute<ModelOfLoanDetailNavigationRoute>();
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

  return {
    getController: {loading, error, data:loan}
  }
}