/* istanbul ignore file */
import { IControllerGetData } from "@poc/interfaces";
import { RouteProp } from "@react-navigation/native";
import { PaymentEntity } from "../../../domain";

type IPaymentDetailNavigationParams ={
  params: {
    id: string;
  }
}

type IPaymentDetailNavigationRoute = RouteProp<IPaymentDetailNavigationParams, 'params'>;

export const usePaymentDetailController: IControllerGetData<PaymentEntity>;