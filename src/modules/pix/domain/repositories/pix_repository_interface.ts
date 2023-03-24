/* istanbul ignore file */
import { PixEntity } from "../entities";

interface IProps {
  id: string;
}

export interface IPixRepository {
  getList(): Promise<PixEntity[]>;
  getBy({id}:IProps): Promise<PixEntity>;
}