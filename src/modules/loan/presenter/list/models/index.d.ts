import { LoanEntity } from "../../../domain";

interface returnUseLoanListController {
  getController: {
    loans: LoanEntity[];
    loading: boolean;
    error:boolean;
  },
  handleController: {
    navigateToDetail: () => void;
  }
}

export function useLoanListController():returnUseLoanListController;