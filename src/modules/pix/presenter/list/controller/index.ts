import { useEffect, useState } from "react"
import { container } from "tsyringe";
import { CoreConstants } from "../../../../../core";
import { IGetListPixUsecase, PixEntity } from "../../../domain";
import { pixListDependences } from "../bind";
import { IControllerGetData } from "@poc/interfaces";
import { useIsFocused } from "@react-navigation/native";

pixListDependences();
export const usePixListController:IControllerGetData<PixEntity[]> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pix, setPix] = useState<PixEntity[]>([]);
  const useCase = container.resolve<IGetListPixUsecase>(CoreConstants.GetListPixUsecase);
  const isFocused = useIsFocused();
  useEffect(
    () => {
      setLoading(true);
      const fetchUser = async () => {
        try {
          const response = await useCase.call();
          setPix(response);
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
  
  return {loading, error, data:pix}
}