import { IControllerGetData } from "@poc/interfaces";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetByPaymentUsecase, PaymentEntity } from "../../../domain";
import { IPaymentDetailNavigationRoute } from "../interface";

export const usePaymentDetailController:IControllerGetData<PaymentEntity> = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [payment, setPayment] = React.useState<PaymentEntity>({} as PaymentEntity);
  const useCase = container.resolve<IGetByPaymentUsecase>(CoreConstants.GetByPaymentUsecase);
  const route = useRoute<IPaymentDetailNavigationRoute>();
  React.useEffect(
    () => {
      const loadData = async () => {
        try {
          setError(false);
          setLoading(true);
          const response = await useCase.call({id: route.params.id});
          setPayment(response);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
      loadData();
    },[]
  )

  return {loading, error, data:payment}
}