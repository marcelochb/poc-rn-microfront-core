import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { GetListPaymentUsecase, IGetListPaymentUsecase } from '../../../../../src/modules/payment/domain';
import { paymentEntityList } from '../../../../../src/modules/payment/external/mocks';
describe('Payment GetList Usecase =>', () => {
  it("When get success request should return PaymentEntities' array", async () => {
    class PaymentMockRepository {
      getList = jest.fn().mockImplementation(() => {
        return paymentEntityList;
      });
    };
    container.register(CoreConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(CoreConstants.GetListPaymentUsecase,{useClass: GetListPaymentUsecase});
    const useCase = container.resolve<IGetListPaymentUsecase>(CoreConstants.GetListPaymentUsecase);
    const response = await useCase.call();
    expect(response).toEqual(paymentEntityList);
  });
  it("When get fail request should return Error", async () => {
    class PaymentMockRepository {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(CoreConstants.GetListPaymentUsecase,{useClass: GetListPaymentUsecase});
    const useCase = container.resolve<IGetListPaymentUsecase>(CoreConstants.GetListPaymentUsecase);
    try {
      await useCase.call();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});