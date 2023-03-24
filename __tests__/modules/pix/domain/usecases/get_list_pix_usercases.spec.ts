import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { GetListPixUsecase, IGetListPixUsecase } from '../../../../../src/modules/pix/domain';
import { pixEntityList } from '../../../../../src/modules/pix/external/mocks';
describe('Pix GetList Usecase =>', () => {
  it("When get success request should return PixEntities' array", async () => {
    class PixMockRepository {
      getList = jest.fn().mockImplementation(() => {
        return pixEntityList;
      });
    };
    container.register(CoreConstants.IPixRepository,{useValue: new PixMockRepository()});
    container.register(CoreConstants.GetListPixUsecase,{useClass: GetListPixUsecase});
    const useCase = container.resolve<IGetListPixUsecase>(CoreConstants.GetListPixUsecase);
    const response = await useCase.call();
    expect(response).toEqual(pixEntityList);
  });
  it("When get fail request should return Error", async () => {
    class PixMockRepository {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IPixRepository,{useValue: new PixMockRepository()});
    container.register(CoreConstants.GetListPixUsecase,{useClass: GetListPixUsecase});
    const useCase = container.resolve<IGetListPixUsecase>(CoreConstants.GetListPixUsecase);
    try {
      await useCase.call();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
});