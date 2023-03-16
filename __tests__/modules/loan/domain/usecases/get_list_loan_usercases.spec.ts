import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../../src/core';
import { LoanEntity } from '../../../../../src/modules';
import { GetListLoanUsecase, IGetListLoanUsecase } from '../../../../../src/modules/loan/domain';
const loanEntities = [new LoanEntity({id: '1',name: 'teste', amount: 'R$ 10', type: 'tipo'})]
describe('Loan GetList Usecase =>', () => {
  it("When get success request should return LoanEntities' array", async () => {
    class LoanMockRepository {
      getList = jest.fn().mockImplementation(() => {
        return loanEntities;
      });
    };
    container.register(LoanConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(LoanConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
    const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);
    const response = await useCase.call();
    expect(response).toEqual(loanEntities);
  });
  it("When get fail request should return Error", async () => {
    class LoanMockRepository {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(LoanConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
    const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);
    try {
      await useCase.call();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});