import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { GetByLoanUsecase, IGetByLoanUsecase } from '../../../../../src/modules/loan/domain';
import { loanEntity } from '../../../../../src/modules/loan/external/mocks';
interface IProps {
  id: string;
}
describe('Loan GetBy Usecase =>', () => {
  it("When get success request should return LoanEntities' array", async () => {
    class LoanMockRepository {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return loanEntity;
      });
    };
    container.register(CoreConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(CoreConstants.GetByLoanUsecase,{useClass: GetByLoanUsecase});
    const useCase = container.resolve<IGetByLoanUsecase>(CoreConstants.GetByLoanUsecase);
    const response = await useCase.call({id:'1'});
    expect(response).toEqual(loanEntity);
  });
  it("When get fail request should return Error", async () => {
    class LoanMockRepository {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(CoreConstants.ILoanRepository,{useValue: new LoanMockRepository()});
    container.register(CoreConstants.GetByLoanUsecase,{useClass: GetByLoanUsecase});
    const useCase = container.resolve<IGetByLoanUsecase>(CoreConstants.GetByLoanUsecase);
    try {
      await useCase.call({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});