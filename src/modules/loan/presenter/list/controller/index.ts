import { useCallback, useEffect, useState } from "react"
import { container } from "tsyringe";
import { LoanConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { loanListDependences } from "../bind";
import { IControllerGetData } from "@poc/interfaces";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

loanListDependences();
export const useLoanListController:IControllerGetData<LoanEntity[]> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loans, setLoans] = useState<LoanEntity[]>([]);
  const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);
  const isFocused = useIsFocused();
  useEffect(
    () => {
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
      if (isFocused) fetchUser();
      return () => {
        setLoading(true);
      };
    }, [isFocused]
  );
  
  return {loading, error, data:loans}
}