import { inject, injectable } from "tsyringe";
import { CoreConstants } from "../../../../core/constants";
import { IPixRepository, PixEntity } from "../../domain";
import { IPixDatasource } from "../datasources";
import { PixModel } from "../models";

interface IProps {
  id: string;
}
@injectable()
export class PixRepository implements IPixRepository {
  constructor(
    @inject(CoreConstants.IPixDatasource)
    private readonly datasource: IPixDatasource
  ) {}

  async getList(): Promise<PixEntity[]> {
    const response = await this.datasource.getList() as PixModel[];
    return PixModel.toEntityList(response);
  }
  
  async getBy({ id }: IProps): Promise<PixEntity> {
    const response = await this.datasource.getBy({id});
    return PixModel.toEntity(response);
  }

  
}