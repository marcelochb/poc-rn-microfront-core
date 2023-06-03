import { IControllerGetData } from "../../../../../../../interfaces/src/controllers";
import React from "react";
import { CoreConstants } from "../../../../../core";
import { IGetByLoanUsecase, LoanEntity } from "../../../domain";
import { loanBind } from "../../loan_bind";

export const useLoanDetailController:IControllerGetData<LoanEntity> = (params) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loan, setLoan] = React.useState<LoanEntity>({} as LoanEntity);
  const useCase = loanBind.get<IGetByLoanUsecase>(CoreConstants.GetByLoanUsecase);
  React.useEffect(
    () => {
      const loadData = async () => {
        try {
          setError(false);
          setLoading(true);
          const response = await useCase.call({id: params?.id ?? ''});
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