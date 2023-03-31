/* istanbul ignore file */
import { container } from "tsyringe"
import { AxiosApiClient, CoreConstants } from "../../../../../core";
import { GetListPixUsecase } from "../../../domain";
import { PixDatasource } from "../../../external";
import { PixRepository } from "../../../infra";

export const pixListDependences = () => {
  container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
  container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
  container.register(CoreConstants.GetListPixUsecase,{useClass: GetListPixUsecase});
}