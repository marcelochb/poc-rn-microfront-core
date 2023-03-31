import 'reflect-metadata';
import { ILoanDatasource } from '../../../../src/modules/loan/infra';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../src/core';
import { LoanDatasource } from '../../../../src/modules/loan/external';
import { loanModelList, loanModel, loanEntity, loanJsonList, loanJson } from '../../../../src/modules/loan/external/mocks';

describe('Loan Datasources |', () => {
  it("GetList => When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(async() => {
        return Promise.resolve(loanJsonList);
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
    const response = await loanDatasource.getList();
    expect(response).toEqual(loanModelList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
    try {
      await loanDatasource.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return loanJson;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
    const response = await loanDatasource.getBy({id:'1'});
    expect(response).toEqual(loanModel);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class ApiMockClient {
      get = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
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
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
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
    container.register(CoreConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(CoreConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(CoreConstants.ILoanDatasource);
    try {
      await loanDatasource.create(loanEntity);
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})