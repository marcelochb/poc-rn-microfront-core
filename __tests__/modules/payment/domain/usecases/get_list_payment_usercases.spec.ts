import 'reflect-metadata';
import { container } from 'tsyringe';
import { PaymentConstants } from '../../../../../src/core';
import { GetListPaymentUsecase, IGetListPaymentUsecase } from '../../../../../src/modules/payment/domain';
import { paymentEntityList } from '../../../../../src/modules/payment/external/mocks';
describe('Payment GetList Usecase =>', () => {
  it("When get success request should return PaymentEntities' array", async () => {
    class PaymentMockRepository {
      getList = jest.fn().mockImplementation(() => {
        return paymentEntityList;
      });
    };
    container.register(PaymentConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(PaymentConstants.GetListPaymentUsecase,{useClass: GetListPaymentUsecase});
    const useCase = container.resolve<IGetListPaymentUsecase>(PaymentConstants.GetListPaymentUsecase);
    const response = await useCase.call();
    expect(response).toEqual(paymentEntityList);
  });
  it("When get fail request should return Error", async () => {
    class PaymentMockRepository {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(PaymentConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(PaymentConstants.GetListPaymentUsecase,{useClass: GetListPaymentUsecase});
    const useCase = container.resolve<IGetListPaymentUsecase>(PaymentConstants.GetListPaymentUsecase);
    try {
      await useCase.call();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});