import 'reflect-metadata';
import { container } from 'tsyringe';
import React from 'react';
import { LoanConstants } from '../../../../src/core';
import { loanEntityList } from '../../../../src/modules/loan/external/mocks';
import { useLoanListController } from '../../../../src/modules';
import { Text } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
const reactNavigation = require('@react-navigation/native');

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
  useIsFocused: jest.fn().mockImplementation(() => true ),
}));
describe('Loan List Controller =>',() => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('When success request should retun IContrllerData<LoanEntity[]>', async () => {
    class GetListLoanMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(loanEntityList));
    }
    container.register(LoanConstants.GetListLoanUsecase,{useValue: new GetListLoanMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = useLoanListController();
      return (
        <Text>{loading ? 'loading':data[0].name}</Text>
        );
    }
    render(
        <MyComponent />
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  it('When fail request should retun erro=true', async () => {
    class GetListLoanMockUsecase {
      call = jest.fn().mockRejectedValue(async() =>{throw Error});
    }
    container.register(LoanConstants.GetListLoanUsecase,{useValue: new GetListLoanMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = useLoanListController();
      return (
        <Text>{loading 
                    ? 'loading' 
                    : error ? 
                        'comunication fail'
                        : 'sucesso'
              }
        </Text>
      );
    }
    render(
        <MyComponent />
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
  })
  it('When screen is not in focus state shoud return empty list', async () => {
    reactNavigation.useIsFocused.mockImplementation(() => false);
    class GetListLoanMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(loanEntityList));
    }
    container.register(LoanConstants.GetListLoanUsecase,{useValue: new GetListLoanMockUsecase()});

    const MyComponent = () => {
      const {data,loading} = useLoanListController();
      return (
        <Text>{loading 
                    ? 'loading' 
                    : data.length == 0 ? 
                        'empty list'
                        : data[0].name
              }
        </Text>
      );
    }
    render(
        <MyComponent />
    )
    // await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
  })
})