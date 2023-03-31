import { useEffect, useState } from "react"
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetListPaymentUsecase, PaymentEntity } from "../../../domain";
import { IControllerGetData } from "@poc/interfaces";
import { useIsFocused } from "@react-navigation/native";

export const usePaymentListController:IControllerGetData<PaymentEntity[]> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [payments, setPayments] = useState<PaymentEntity[]>([]);
  const useCase = container.resolve<IGetListPaymentUsecase>(CoreConstants.GetListPaymentUsecase);
  const isFocused = useIsFocused();
  useEffect(
    () => {
      setLoading(true);
      const fetchUser = async () => {
        try {
          const response = await useCase.call();
          setPayments(response);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
      if (isFocused) fetchUser();
      else setLoading(false);
    }, [isFocused]
  );
  
  return {loading, error, data:payments}
}