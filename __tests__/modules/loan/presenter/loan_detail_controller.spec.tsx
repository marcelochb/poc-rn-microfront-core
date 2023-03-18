import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoanConstants } from '../../../../src/core';
import { loanEntity } from '../../../../src/modules/loan/external/mocks';
import { useLoanDetailController } from '../../../../src/modules';
import { Text, View } from 'react-native';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';




jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn().mockImplementation(() => {return {params: {id:'1'}}} ),
}));
interface IProps {
  id: string;
}
describe('Loan Deail Controller =>',() => {
  it('When success request should retun IContrllerData<LoanEntity>', async () => {
    class GetByLoanMockUsecase {
      call = jest.fn().mockImplementation( async ({id}:IProps) => Promise.resolve(loanEntity));
    }
    container.register(LoanConstants.GetByLoanUsecase,{useValue: new GetByLoanMockUsecase()});

    const MyComponent = () => {
      const {data, loading} = useLoanDetailController();
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
    class GetByLoanMockUsecase {
      call = jest.fn().mockRejectedValue(async({id}:IProps) =>{throw Error});
    }
    container.register(LoanConstants.GetByLoanUsecase,{useValue: new GetByLoanMockUsecase()});

    const MyComponent = () => {
      const {error,loading} = useLoanDetailController();
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