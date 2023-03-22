import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../../src/core';
import { GetListLoanUsecase, IGetListLoanUsecase } from '../../../../../src/modules/loan/domain';
import { loanEntityList } from '../../../../../src/modules/loan/external/mocks';
describe('Loan GetList Usecase =>', () => {
  it("When get success request should return LoanEntities' array", async () => {
    class LoanMockRepository {
      getList = jest.fn().mockImplementation(() => {
        return loanEntityList;
      });
    };
    container.register(LoanConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(LoanConstants.GetListLoanUsecase,{useClass: GetListLoanUsecase});
    const useCase = container.resolve<IGetListLoanUsecase>(LoanConstants.GetListLoanUsecase);
    const response = await useCase.call();
    expect(response).toEqual(loanEntityList);
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