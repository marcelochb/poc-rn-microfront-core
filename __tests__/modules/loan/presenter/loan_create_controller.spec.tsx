import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { loanEntity } from '../../../../src/modules/loan/external/mocks';
import { useLoanCreateController, useLoanDetailController } from '../../../../src/modules';
import { Text, TouchableOpacity, View } from 'react-native';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';
import React from 'react';




jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
}));
interface IProps {
  id: string;
}
describe('Loan Create Controller =>',() => {
  it('When success submit request should not return Error', async () => {
    class CreateLoanMockUsecase {
      call = jest.fn().mockImplementation( async () => null);
    }
    container.register(LoanConstants.CreateLoanUsecase,{useValue: new CreateLoanMockUsecase()});

    const MyComponent = () => {
      const {onSubmit, loading} = useLoanCreateController();
      return (
        <>
          <TouchableOpacity testID='subimit-button' onPress={() => onSubmit()}>Submit</TouchableOpacity>
          <Text>{loading ? 'loading':'success'}</Text>
        </>
        );
    }
    render(
        <MyComponent />
    )
    const button = screen.getByTestId('subimit-button');
    fireEvent.press(button);
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  it('When fail submit request should return Error', async () => {
    class CreateLoanMockUsecase {
      call = jest.fn().mockImplementation( async () => {throw Error});
    }
    container.register(LoanConstants.CreateLoanUsecase,{useValue: new CreateLoanMockUsecase()});

    const MyComponent = () => {
      const {onSubmit, loading, error} = useLoanCreateController();
      return (
        <>
          <TouchableOpacity testID='subimit-button' onPress={() => onSubmit()}>Submit</TouchableOpacity>
          <Text>{loading ? 'loading': error ? 'error':'success'}</Text>
        </>
        );
    }
    render(
        <MyComponent />
    )
    const button = screen.getByTestId('subimit-button');
    fireEvent.press(button);
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })

})