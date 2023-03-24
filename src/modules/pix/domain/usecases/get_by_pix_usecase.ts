import { PixEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { IPixRepository } from "../repositories";
import { CoreConstants } from "../../../../core";
interface IProps {
  id: string;
}
export interface IGetByPixUsecase {
  call({id}:IProps):Promise<PixEntity>;
}

@injectable()
export class GetByPixUsecase implements IGetByPixUsecase {

  constructor(
    @inject(CoreConstants.IPixRepository)
    private readonly repository: IPixRepository
  ) {}

  async call({id}:IProps): Promise<PixEntity> {
    return await this.repository.getBy({id});
  }

}