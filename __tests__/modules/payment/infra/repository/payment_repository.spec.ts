import 'reflect-metadata';
import { container } from 'tsyringe';
import { PaymentConstants } from '../../../../../src/core';
import { ILoanRepository, LoanEntity } from '../../../../../src/modules/loan/domain';
import { loanEntity, loanEntityList, loanModel, loanModelList } from '../../../../../src/modules/loan/external/mocks';
import { LoanRepository } from '../../../../../src/modules/loan/infra';
import { IPaymentRepository } from '../../../../../src/modules/payment/domain';
import { paymentEntity, paymentEntityList, paymentModel, paymentModelList } from '../../../../../src/modules/payment/external/mocks';
import { PaymentRepository } from '../../../../../src/modules/payment/infra/repositories/payment_repository';
interface IProps {
  id: string;
}
describe('Payment Repository |', () => {
  it("GetList => When request success, return PaymentEntities's array", async () => {
    class PaymentMockDatasource {
      getList = jest.fn().mockImplementation(() => {
        return paymentModelList;
      });
    };
    container.register(PaymentConstants.IPaymentDatasource,{useValue: new PaymentMockDatasource()});
    container.register(PaymentConstants.IPaymentRepository,{useClass: PaymentRepository});
    const paymentRepository = container.resolve<IPaymentRepository>(PaymentConstants.IPaymentRepository);
    const response = await paymentRepository.getList();
    expect(response).toEqual(paymentEntityList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class PaymentMockDatasource {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(PaymentConstants.IPaymentDatasource,{useValue: new PaymentMockDatasource()});
    container.register(PaymentConstants.IPaymentRepository,{useClass: PaymentRepository});
    const paymentRepository = container.resolve<IPaymentRepository>(PaymentConstants.IPaymentRepository);
    try {
      await paymentRepository.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return PaymentModel's array", async () => {
    class PaymentMockDatasource {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return paymentModel;
      });
    };
    container.register(PaymentConstants.IPaymentDatasource,{useValue: new PaymentMockDatasource()});
    container.register(PaymentConstants.IPaymentRepository,{useClass: PaymentRepository});
    const paymentDatasource = container.resolve<IPaymentRepository>(PaymentConstants.IPaymentRepository);
    const response = await paymentDatasource.getBy({id:'1'});
    expect(response).toEqual(paymentEntity);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class PaymentMockDatasource {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(PaymentConstants.IPaymentDatasource,{useValue: new PaymentMockDatasource()});
    container.register(PaymentConstants.IPaymentRepository,{useClass: PaymentRepository});
    const paymentDatasource = container.resolve<IPaymentRepository>(PaymentConstants.IPaymentRepository);
    try {
      await paymentDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})