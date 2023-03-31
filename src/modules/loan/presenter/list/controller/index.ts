import { useEffect, useState } from "react"
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { IControllerGetData } from "@poc/interfaces";
import { useIsFocused } from "@react-navigation/native";

export const useLoanListController:IControllerGetData<LoanEntity[]> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loans, setLoans] = useState<LoanEntity[]>([]);
  const useCase = container.resolve<IGetListLoanUsecase>(CoreConstants.GetListLoanUsecase);
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