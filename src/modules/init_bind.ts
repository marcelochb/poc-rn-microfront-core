/* istanbul ignore file */
import { apiDependences } from "../core/services/api_bind";
import { loanCreateDependences } from "./loan/presenter/create/bind";
import { loanDetailDependences } from "./loan/presenter/detail/bind";
import { loanListDependences } from "./loan/presenter/list/bind";
import { paymentDetailDependences } from "./payment/presenter/detail/bind";
import { paymentListDependences } from "./payment/presenter/list/bind";
import { pixDetailDependences } from "./pix/presenter/detail/bind";
import { pixListDependences } from "./pix/presenter/list/bind";

export const initBind = () => {
  apiDependences();
  loanListDependences();
  loanDetailDependences();
  loanCreateDependences();
  paymentDetailDependences();
  paymentListDependences();
  pixDetailDependences();
  pixListDependences();
}