/* istanbul ignore file */
import { IControllerGetData, IControllerGetDataReturn } from "@poc/interfaces";
import { PaymentEntity } from "../../../domain";

export const usePaymentListController:IControllerGetData<PaymentEntity[]>;