/* istanbul ignore file */
import { container } from "tsyringe"
import { ApiClient, CoreConstants } from "../../../../../core";
import { GetByPaymentUsecase } from "../../../domain";
import { PaymentDatasource } from "../../../external";
import { PaymentRepository } from "../../../infra";

export const paymentDetailDependences = () => {
  container.register(CoreConstants.IApiClient,{useValue: new ApiClient()});
  container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
  container.register(CoreConstants.IPaymentRepository,{useClass: PaymentRepository});
  container.register(CoreConstants.GetByPaymentUsecase,{useClass: GetByPaymentUsecase});
}