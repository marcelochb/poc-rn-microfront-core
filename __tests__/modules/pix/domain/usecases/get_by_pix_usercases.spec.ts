import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { GetByPixUsecase, IGetByPixUsecase } from '../../../../../src/modules/pix/domain';
import { pixEntity } from '../../../../../src/modules/pix/external/mocks';
interface IProps {
  id: string;
}
describe('Pix GetBy Usecase =>', () => {
  it("When get success request should return PixEntities' array", async () => {
    class PixMockRepository {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return pixEntity;
      });
    };
    container.register(CoreConstants.IPixRepository,{useValue: new PixMockRepository()});
    container.register(CoreConstants.GetByPixUsecase,{useClass: GetByPixUsecase});
    const useCase = container.resolve<IGetByPixUsecase>(CoreConstants.GetByPixUsecase);
    const response = await useCase.call({id:'1'});
    expect(response).toEqual(pixEntity);
  });
  it("When get fail request should return Error", async () => {
    class PixMockRepository {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(CoreConstants.IPixRepository,{useValue: new PixMockRepository()});
    container.register(CoreConstants.GetByPixUsecase,{useClass: GetByPixUsecase});
    const useCase = container.resolve<IGetByPixUsecase>(CoreConstants.GetByPixUsecase);
    try {
      await useCase.call({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});