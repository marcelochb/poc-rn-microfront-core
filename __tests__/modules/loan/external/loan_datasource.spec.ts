import 'reflect-metadata';
import axios from 'axios';
import { ILoanDatasource, LoanModel } from '../../../../src/modules/loan/infra';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { LoanDatasource } from '../../../../src/modules/loan/external';
import { getListMock, dataResponse } from '../../../../src/modules/loan/external/mocks';

describe('Loan Datasources =>', () => {
  it("When request success, return LoanModel's array", async () => {
    class ApiMockClient {
      get = jest.fn().mockImplementation(() => {
        return getListMock;
      });
    };

    container.register(LoanConstants.IApiClient,{useValue: new ApiMockClient()});
    container.register(LoanConstants.ILoanDatasource,{useClass: LoanDatasource});
    const loanDatasource = container.resolve<ILoanDatasource>(LoanConstants.ILoanDatasource);
    const response = await loanDatasource.getList();
    expect(response).toEqual(dataResponse);
  })
})