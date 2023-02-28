import { useEffect, useState } from "react"
import { container } from "tsyringe";
import {useNavigation} from '@react-navigation/native';
import { LoanConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { loanListDependences } from "../bind";
import { LOAN_NAVIGATORS } from "@poc/tools";
import { IController } from "@poc/interfaces";

loanListDependences();
export const useLoanListController = ():IController<LoanEntity[]> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loans, setLoans] = useState<LoanEntity[]>([]);
  const navigation = useNavigation<any>();
  const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);

  useEffect(
    () => {
      const loadData = async () => {
        try {
          setError(false);
          setLoading(true);
          const response = await useCase.call();
          setLoans(response);
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
    getController: {loading, error, data:loans}
  }
}