import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../src/core';
import { useLoanDetailController } from '../../../../src/modules';
import { Text } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import React from 'react';
import { paymentEntity } from '../../../../src/modules/payment/external';
import { usePaymentDetailController } from '../../../../src/modules/payment/presenter/detail/controller';

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
}));

interface IProps {
  id: string;
}

describe('Payment Deail Controller =>',() => {
  it('When success request should retun IContrllerData<PaymentEntity>', async () => {
    class GetByPaymentMockUsecase {
      call = jest.fn().mockImplementation( async ({id}:IProps) => Promise.resolve(paymentEntity));
    }
    container.register(CoreConstants.GetByPaymentUsecase,{useValue: new GetByPaymentMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = usePaymentDetailController();
      return (
        <Text>{loading ? 'loading':data.recipient}</Text>
        );
    }
    render(
        <MyComponent />
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  it('When fail request should retun erro=true', async () => {
    class GetByPaymentMockUsecase {
      call = jest.fn().mockRejectedValue(async({id}:IProps) =>{throw Error});
    }
    container.register(CoreConstants.GetByPaymentUsecase,{useValue: new GetByPaymentMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = usePaymentDetailController();
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
})