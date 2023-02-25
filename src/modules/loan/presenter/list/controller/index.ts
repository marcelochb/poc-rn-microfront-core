import { useEffect, useState } from "react"
import { container } from "tsyringe";
import {useNavigation} from '@react-navigation/native';
import { LoanConstants } from "../../../../../core";
import { IGetListLoanUsecase, LoanEntity } from "../../../domain";
import { loanListDependences } from "../bind";
import { LOAN_NAVIGATORS } from "@poc/tools";

loanListDependences();
export const useLoanListController = () => {
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

  const navigateToDetail = (id: string) => {
    navigation.navigate(LOAN_NAVIGATORS.screens.detail.name, {id});
  }
  
  return {
    getController: {loading, error, loans},
    handleController: {navigateToDetail}
  }
}