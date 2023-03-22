import 'reflect-metadata';
import { container } from 'tsyringe';
import { PaymentConstants } from '../../../../../src/core';
import { GetByPaymentUsecase, IGetByPaymentUsecase } from '../../../../../src/modules/payment/domain';
import { paymentEntity } from '../../../../../src/modules/payment/external/mocks';
interface IProps {
  id: string;
}
describe('Payment GetBy Usecase =>', () => {
  it("When get success request should return PaymentEntities' array", async () => {
    class PaymentMockRepository {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return paymentEntity;
      });
    };
    container.register(PaymentConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(PaymentConstants.GetByPaymentUsecase,{useClass: GetByPaymentUsecase});
    const useCase = container.resolve<IGetByPaymentUsecase>(PaymentConstants.GetByPaymentUsecase);
    const response = await useCase.call({id:'1'});
    expect(response).toEqual(paymentEntity);
  });
  it("When get fail request should return Error", async () => {
    class PaymentMockRepository {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(PaymentConstants.IPaymentRepository,{useValue: new PaymentMockRepository()});
    container.register(PaymentConstants.GetByPaymentUsecase,{useClass: GetByPaymentUsecase});
    const useCase = container.resolve<IGetByPaymentUsecase>(PaymentConstants.GetByPaymentUsecase);
    try {
      await useCase.call({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});