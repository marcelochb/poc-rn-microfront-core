import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../src/core';
import { Text } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import React from 'react';
import { pixEntity } from '../../../../src/modules/pix/external';
import { usePixDetailController } from '../../../../src/modules/pix/presenter/detail/controller';

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
}));

interface IProps {
  id: string;
}

describe('Pix Deail Controller =>',() => {
  it('When success request should retun IContrllerData<PixEntity>', async () => {
    class GetByPixMockUsecase {
      call = jest.fn().mockImplementation( async ({id}:IProps) => Promise.resolve(pixEntity));
    }
    container.register(CoreConstants.GetByPixUsecase,{useValue: new GetByPixMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = usePixDetailController();
      return (
        <Text>{loading ? 'loading':data.name}</Text>
        );
    }
    render(
        <MyComponent />
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  it('When fail request should retun erro=true', async () => {
    class GetByPixMockUsecase {
      call = jest.fn().mockRejectedValue(async({id}:IProps) =>{throw Error});
    }
    container.register(CoreConstants.GetByPixUsecase,{useValue: new GetByPixMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = usePixDetailController();
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