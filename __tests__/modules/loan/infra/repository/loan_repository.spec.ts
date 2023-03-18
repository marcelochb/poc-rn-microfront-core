import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../../src/core';
import { ILoanRepository, LoanEntity } from '../../../../../src/modules/loan/domain';
import { getByMock, getListMock, loanEntity, loanEntityList, loanModel, loanModelList } from '../../../../../src/modules/loan/external/mocks';
import { LoanRepository } from '../../../../../src/modules/loan/infra';
interface IProps {
  id: string;
}
describe('Loan Repository |', () => {
  it("GetList => When request success, return LoanEntities's array", async () => {
    class LoanMockDatasource {
      getList = jest.fn().mockImplementation(() => {
        return loanModelList;
      });
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanRepository = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    const response = await loanRepository.getList();
    expect(response).toEqual(loanEntityList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class LoanMockDatasource {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanRepository = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    try {
      await loanRepository.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return LoanModel's array", async () => {
    class LoanMockDatasource {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return loanModel;
      });
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanDatasource = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    const response = await loanDatasource.getBy({id:'1'});
    expect(response).toEqual(loanEntity);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class LoanMockDatasource {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanDatasource = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    try {
      await loanDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("Create => When request success, return LoanModel's array", async () => {
    class LoanMockDatasource {
      create = jest.fn().mockImplementation((loan:LoanEntity) => null);
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanDatasource = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    try {
      await loanDatasource.create(loanEntity);
    } catch (error) {
      expect(error).not.toThrowError()
    }
  });
  it("Create => When get fail request should return Error", async () => {
    class LoanMockDatasource {
      create = jest.fn().mockRejectedValue((loan:LoanEntity) => {
        throw Error;
      });
    };
    container.register(LoanConstants.ILoanDatasource,{useValue: new LoanMockDatasource()});
    container.register(LoanConstants.ILoanRepository,{useClass: LoanRepository});
    const loanDatasource = container.resolve<ILoanRepository>(LoanConstants.ILoanRepository);
    try {
      await loanDatasource.create(loanEntity);
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})