import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { PixDatasource, pixJson, pixJsonList, pixModel, pixModelList } from '../../../../../src/modules/pix/external';
import { IPixDatasource } from '../../../../../src/modules/pix/infra';

describe('Pix Datasources |', () => {
  it("GetList => When request success, return PixModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return pixJsonList;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
    const paymentDatasource = container.resolve<IPixDatasource>(CoreConstants.IPixDatasource);
    const response = await paymentDatasource.getList();
    expect(response).toEqual(pixModelList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
    const paymentDatasource = container.resolve<IPixDatasource>(CoreConstants.IPixDatasource);
    try {
      await paymentDatasource.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return PaymentModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return pixJson;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
    const paymentDatasource = container.resolve<IPixDatasource>(CoreConstants.IPixDatasource);
    const response = await paymentDatasource.getBy({id:'1'});
    expect(response).toEqual(pixModel);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPixDatasource,{useClass: PixDatasource});
    const paymentDatasource = container.resolve<IPixDatasource>(CoreConstants.IPixDatasource);
    try {
      await paymentDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})