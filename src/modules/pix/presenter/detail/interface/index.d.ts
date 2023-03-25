/* istanbul ignore file */
import { IControllerGetData } from "@poc/interfaces";
import { RouteProp } from "@react-navigation/native";
import { PixtEntity } from "../../../domain";

type IPixtDetailNavigationParams ={
  params: {
    id: string;
  }
}

type IPixtDetailNavigationRoute = RouteProp<IPixtDetailNavigationParams, 'params'>;

export const usePixtDetailController: IControllerGetData<PixtEntity>;