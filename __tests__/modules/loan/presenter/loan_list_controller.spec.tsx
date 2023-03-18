import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { renderHook } from "@testing-library/react-hooks";
import { loanEntity, loanEntityList } from '../../../../src/modules/loan/external/mocks';
import { LoanEntity, useLoanListController,useLoanDetailController } from '../../../../src/modules';
import { NavigationContext, NavigationProp, ParamListBase } from "@react-navigation/native"
import { Text, View } from 'react-native';
import { render, screen, waitFor } from '@testing-library/react-native';
import { Screen } from 'react-native-screens';

// fake NavigationContext value data
// const navContext:NavigationProp<ParamListBase, any, any> = {
//   isFocused: () => true,
//   // addListener returns an unscubscribe function.
//   addListener: jest.fn(() => jest.fn()),
//   getParent: jest.fn((id: string) => jest.fn({id})),
//   setParams: jest.fn(() => jest.fn()),
//   setOptions: jest.fn(() => jest.fn()),
// }




jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
}));
interface IProps {
  id: string;
}
describe('Loan List Controller =>',() => {
  it('When', async () => {
    class GetListLoanMockUsecase {
      call = jest.fn().mockImplementation( async ({id}:IProps) => Promise.resolve(loanEntity));
    }
    container.register(LoanConstants.GetByLoanUsecase,{useValue: new GetListLoanMockUsecase()});

    const MyComponent = () => {
      const {data} = useLoanDetailController();
      return (
        <Text>{data.name}</Text>
        );
    }
    render(
        <MyComponent />
    )
    await waitFor(() => {
      expect(screen.toJSON()).toEqual(render(<Text>teste</Text>).toJSON());    
    },{interval:1})
    
  })
})