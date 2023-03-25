import 'reflect-metadata';
import { container } from 'tsyringe';
import React from 'react';
import { CoreConstants } from '../../../../src/core';
import { Text } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import { pixEntityList } from '../../../../src/modules/pix/external';
import { usePixListController } from '../../../../src/modules/pix/presenter/list/controller';
const reactNavigation = require('@react-navigation/native');

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
  useIsFocused: jest.fn().mockImplementation(() => true ),
}));
describe('Pix List Controller =>',() => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('When success request should retun IContrllerData<PixEntity[]>', async () => {
    class GetListPixMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(pixEntityList));
    }
    container.register(CoreConstants.GetListPixUsecase,{useValue: new GetListPixMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = usePixListController();
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
    class GetListPixMockUsecase {
      call = jest.fn().mockRejectedValue(async() =>{throw Error});
    }
    container.register(CoreConstants.GetListPixUsecase,{useValue: new GetListPixMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = usePixListController();
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
    class GetListPixMockUsecase {
      call = jest.fn().mockImplementation( async () => Promise.resolve(pixEntityList));
    }
    container.register(CoreConstants.GetListPixUsecase,{useValue: new GetListPixMockUsecase()});

    const MyComponent = () => {
      const {data,loading} = usePixListController();
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
    expect(screen.toJSON()).toMatchSnapshot();        
  })
})