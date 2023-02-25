import { LoanEntity } from "../../../domain";

interface returnUseLoanListController {
  getController: {
    loans: LoanEntity[];
    loading: boolean;
    error:boolean;
  },
  handleController: {
    navigateToDetail: (id:string) => void;
  }
}

export function useLoanListController():returnUseLoanListController;