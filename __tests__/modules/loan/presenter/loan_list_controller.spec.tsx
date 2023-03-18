import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { renderHook } from "@testing-library/react-hooks";
import { loanEntity, loanEntityList } from '../../../../src/modules/loan/external/mocks';
import { LoanEntity, useLoanListController,useLoanDetailController } from '../../../../src/modules';
import { NavigationContainer, NavigationContext, NavigationProp, ParamListBase } from "@react-navigation/native"
import { Text, View } from 'react-native';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import { MockedNavigator } from '../../../mock_navigator';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
// const MockedNavigator: React.FC<{component: () => JSX.Element}> = ({component}) => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="MockedScreen"
//           component={component}
//           // initialParams={params}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



// jest.mock("@react-navigation/native", () => ({
//   ...jest.requireActual("@react-navigation/native"),
//   useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
// }));
interface IProps {
  id: string;
}
describe('Loan List Controller =>',() => {
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
        <MockedNavigator component={MyComponent}/>
    )
    await waitForElementToBeRemoved(() => screen.getByText('loading'));
    expect(screen.toJSON()).toMatchSnapshot();        
    
  })
  // it('When fail request should retun erro=true', async () => {
  //   class GetByLoanMockUsecase {
  //     call = jest.fn().mockRejectedValue(async({id}:IProps) =>{throw Error});
  //   }
  //   container.register(LoanConstants.GetByLoanUsecase,{useValue: new GetByLoanMockUsecase()});

  //   const MyComponent = () => {
  //     const {error,loading} = useLoanDetailController();
  //     return (
  //       <Text>{loading 
  //                   ? 'loading' 
  //                   : error ? 
  //                       'comunication fail'
  //                       : 'sucesso'
  //             }
  //       </Text>
  //     );
  //   }
  //   render(
  //       <MyComponent />
  //   )
  //   await waitForElementToBeRemoved(() => screen.getByText('loading'));
  //   expect(screen.toJSON()).toMatchSnapshot();        
  // })
})