import { useCallback, useEffect, useState } from "react"
import { container } from "tsyringe";
import { LoanConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { loanListDependences } from "../bind";
import { IControllerGetData } from "@poc/interfaces";
import { useFocusEffect } from "@react-navigation/native";

loanListDependences();
export const useLoanListController = ():IControllerGetData<LoanEntity[]> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loans, setLoans] = useState<LoanEntity[]>([]);
  const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
  
      const fetchUser = async () => {
        try {
          const response = await useCase.call();
          setLoans(response);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
  
      if (isActive) fetchUser();
  
      return () => {
        isActive = false;
        setLoading(true);
      };
    }, [])
  );
  
  return {loading, error, data:loans}
}