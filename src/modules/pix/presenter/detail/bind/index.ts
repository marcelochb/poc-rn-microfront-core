/* istanbul ignore file */
import { container } from "tsyringe"
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { GetByPixUsecase } from "../../../domain";
import { PixDatasource } from "../../../external";
import { PixRepository } from "../../../infra";

export const pixDetailDependences = () => {
  container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
  container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
  container.register(CoreConstants.GetByPixUsecase,{useClass: GetByPixUsecase});
}