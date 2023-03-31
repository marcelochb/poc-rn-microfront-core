import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { PaymentDatasource } from '../../../../../src/modules/payment/external/datasources/payment_datasource';
import { paymentJson, paymentJsonList, paymentModel, paymentModelList } from '../../../../../src/modules/payment/external/mocks';
import { IPaymentDatasource } from '../../../../../src/modules/payment/infra';

describe('Payment Datasources |', () => {
  it("GetList => When request success, return PaymentModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return paymentJsonList;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
    const paymentDatasource = container.resolve<IPaymentDatasource>(CoreConstants.IPaymentDatasource);
    const response = await paymentDatasource.getList();
    expect(response).toEqual(paymentModelList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
    const paymentDatasource = container.resolve<IPaymentDatasource>(CoreConstants.IPaymentDatasource);
    try {
      await paymentDatasource.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return PaymentModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return paymentJson;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
    const paymentDatasource = container.resolve<IPaymentDatasource>(CoreConstants.IPaymentDatasource);
    const response = await paymentDatasource.getBy({id:'1'});
    expect(response).toEqual(paymentModel);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.IPaymentDatasource,{useClass: PaymentDatasource});
    const paymentDatasource = container.resolve<IPaymentDatasource>(CoreConstants.IPaymentDatasource);
    try {
      await paymentDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})