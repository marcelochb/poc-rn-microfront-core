import { inject, injectable } from "tsyringe";
import { IApiClient, CoreConstants } from "../../../../core";
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
    const response =  await this.apiClient.get<PixModel[]>('/pix');
    return response.data.map(body => PixModel.fromMap(body));
  }

  async getBy({ id }: IProps): Promise<PixModel> {
    const response =  await this.apiClient.get<PixModel>(`/pix/${id}`);
    return PixModel.fromMap(response.data);
  }

  
}