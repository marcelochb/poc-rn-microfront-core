import { useEffect, useState } from "react"
import { CoreConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { IControllerGetData } from "@poc/interfaces";
import { useIsFocused } from "@react-navigation/native";
import { loanBind } from "../../loan_bind";

export const useLoanListController:IControllerGetData<LoanEntity[]> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loans, setLoans] = useState<LoanEntity[]>([]);
  const useCase = loanBind.get<IGetListLoanUsecase>(CoreConstants.GetListLoanUsecase);
  const isFocused = useIsFocused();
  useEffect(
    () => {
      setLoading(true);
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
      else setLoading(false);
    }, [isFocused]
  );
  
  return {loading, error, data:loans}
}