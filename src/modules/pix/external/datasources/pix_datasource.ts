import { IApiClient } from "@poc/interfaces";
import { inject, injectable } from "tsyringe";
import { CoreConstants } from "../../../../core";
import { IPixDatasource, PixModel } from "../../infra";

interface IProps {
  id: string;
}
@injectable()
export class PixDatasource implements IPixDatasource {
  constructor(
    @inject(CoreConstants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}
  async getList(): Promise<PixModel[]> {
    const response =  await this.apiClient.get('/pix');
    return response.map((body:any) => PixModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<PixModel> {
    const response =  await this.apiClient.get(`/pix/${id}`);
    return PixModel.fromMap(response);
  }

  
}