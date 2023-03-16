import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../../src/core';
import { LoanEntity } from '../../../../../src/modules';
import { CreateLoanUsecase, GetListLoanUsecase, ICreateLoanUsecase, IGetListLoanUsecase } from '../../../../../src/modules/loan/domain';
const loanEntity = new LoanEntity({id: '1',name: 'teste', amount: 'R$ 10', type: 'tipo'});
describe('Loan Create Usecase =>', () => {
  it("When get success request should return LoanEntities' array", async () => {
    class LoanMockRepository {
      create = jest.fn().mockImplementation((loan:LoanEntity) => null);
    };
    container.register(LoanConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(LoanConstants.CreateLoanUsecase,{useClass: CreateLoanUsecase});
    const useCase = container.resolve<ICreateLoanUsecase>(LoanConstants.CreateLoanUsecase);
    try {
      await useCase.call(loanEntity);
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
  it("When get fail request should return Error", async () => {
    class LoanMockRepository {
      create = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(LoanConstants.CreateLoanUsecase,{useClass: CreateLoanUsecase});
    const useCase = container.resolve<ICreateLoanUsecase>(LoanConstants.CreateLoanUsecase);
    try {
      await useCase.call(loanEntity);
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});