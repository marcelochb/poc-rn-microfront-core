import 'reflect-metadata';
import { ILoanDatasource, LoanModel } from '../../../../src/modules/loan/infra';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { LoanDatasource } from '../../../../src/modules/loan/external';
import { getListMock, loanModelList, getByMock, loanModel, loanEntity } from '../../../../src/modules/loan/external/mocks';

describe('Loan Datasources |', () => {
  it("GetList => When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return getListMock;
      });
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    const response = await loanDatasource.getList();
    expect(response).toEqual(loanModelList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    try {
      await loanDatasource.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return getByMock;
      });
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    const response = await loanDatasource.getBy({id:'1'});
    expect(response).toEqual(loanModel);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    try {
      await loanDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("Create => When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      post = jest.fn().mockImplementation(() => null);
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    try {
      await loanDatasource.create(loanEntity);
    } catch (error) {
      expect(error).not.toThrowError();
    }
  });
  it("Create => When get fail request should return Error", async () => {
    class ApiMockClient {
      post = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    try {
      await loanDatasource.create(loanEntity);
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})