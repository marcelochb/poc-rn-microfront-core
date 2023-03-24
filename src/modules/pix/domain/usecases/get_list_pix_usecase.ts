import { PixEntity } from "../entities";
import { inject, injectable } from "tsyringe";
import { IPixRepository } from "../repositories";
import { CoreConstants } from "../../../../core";

export interface IGetListPixUsecase {
  call():Promise<PixEntity[]>;
}

@injectable()
export class GetListPixUsecase implements IGetListPixUsecase {

  constructor(
    @inject(CoreConstants.IPixRepository)
    private readonly repository: IPixRepository
  ) {}

  async call(): Promise<PixEntity[]> {
    return await this.repository.getList();
  }

}