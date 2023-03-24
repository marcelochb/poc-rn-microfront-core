/* istanbul ignore file */
import { PixModel } from "../models";

interface IProps {
  id: string;
}
export interface IPixDatasource {
  getList(): Promise<PixModel[]>;
  getBy({id}:IProps): Promise<PixModel>;
}