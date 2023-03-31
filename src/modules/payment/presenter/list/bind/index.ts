/* istanbul ignore file */
import { container } from "tsyringe"
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { GetListPaymentUsecase } from "../../../domain";
import { PaymentDatasource } from "../../../external";
import { PaymentRepository } from "../../../infra";

export const paymentListDependences = () => {
  container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
  container.register(CoreConstants.IPaymentRepository,{useClass: PaymentRepository});
  container.register(CoreConstants.GetListPaymentUsecase,{useClass: GetListPaymentUsecase});
}