import 'reflect-metadata';
import { container } from 'tsyringe';
import React from 'react';
import { CoreConstants } from '../../../../src/core';
import { Text } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import { paymentEntityList } from '../../../../src/modules/payment/external';
import { usePaymentListController } from '../../../../src/modules/payment/presenter/list/controller';
const reactNavigation = require('@react-navigation/native');

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
  useIsFocused: jest.fn().mockImplementation(() => true ),
}));
describe('Payment List Controller =>',() => {
  it('When success request should retun IContrllerData<PaymentEntity[]>', async () => {
    class GetListPaymentMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(paymentEntityList));
    }
    container.register(CoreConstants.GetListPaymentUsecase,{useValue: new GetListPaymentMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = usePaymentListController();
      return (
        <Text>{loading ? 'loading':data[0].recipient}</Text>
        );
    }
    render(
        <MyComponent />
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  it('When fail request should retun erro=true', async () => {
    class GetListPaymentMockUsecase {
      call = jest.fn().mockRejectedValue(async() =>{throw Error});
    }
    container.register(CoreConstants.GetListPaymentUsecase,{useValue: new GetListPaymentMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = usePaymentListController();
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
    class GetListPaymentMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(paymentEntityList));
    }
    container.register(CoreConstants.GetListPaymentUsecase,{useValue: new GetListPaymentMockUsecase()});

    const MyComponent = () => {
      const {data,loading} = usePaymentListController();
      return (
        <Text>{loading 
                    ? 'loading' 
                    : data.length == 0 ? 
                        'empty list'
                        : data[0].recipient
              }
        </Text>
      );
    }
    render(
        <MyComponent />
    )
    expect(screen.toJSON()).toMatchSnapshot();        
  })
})