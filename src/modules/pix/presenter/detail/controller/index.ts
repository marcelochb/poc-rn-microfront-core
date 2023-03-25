import { IControllerGetData } from "@poc/interfaces";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetByPixUsecase, PixEntity } from "../../../domain";
import { pixDetailDependences } from "../bind";
import { IPixtDetailNavigationRoute } from "../interface";

pixDetailDependences();
export const usePixDetailController:IControllerGetData<PixEntity> = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pix, setPix] = React.useState<PixEntity>({} as PixEntity);
  const useCase = container.resolve<IGetByPixUsecase>(CoreConstants.GetByPixUsecase);
  const route = useRoute<IPixtDetailNavigationRoute>();
  React.useEffect(
    () => {
      const loadData = async () => {
        try {
          setError(false);
          setLoading(true);
          const response = await useCase.call({id: route.params.id});
          setPix(response);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
      loadData();
    },[]
  )

  return {loading, error, data:pix}
}