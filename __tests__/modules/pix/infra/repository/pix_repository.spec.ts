import 'reflect-metadata';
import { container } from 'tsyringe';
import { CoreConstants } from '../../../../../src/core';
import { IPixRepository } from '../../../../../src/modules/pix/domain';
import { pixEntity, pixEntityList, pixModel, pixModelList } from '../../../../../src/modules/pix/external/mocks';
import { PixRepository } from '../../../../../src/modules/pix/infra/repositories';
interface IProps {
  id: string;
}
describe('Pix Repository |', () => {
  it("GetList => When request success, return PixEntities's array", async () => {
    class PixMockDatasource {
      getList = jest.fn().mockImplementation(() => {
        return pixModelList;
      });
    };
    container.register(CoreConstants.IPixDatasource,{useValue: new PixMockDatasource()});
    container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
    const pixRepository = container.resolve<IPixRepository>(CoreConstants.IPixRepository);
    const response = await pixRepository.getList();
    expect(response).toEqual(pixEntityList);
  });
  it("GetList => When get fail request should return Error", async () => {
    class PixMockDatasource {
      getList = jest.fn().mockRejectedValue(() => {
        throw Error;
      });
    };
    container.register(CoreConstants.IPixDatasource,{useValue: new PixMockDatasource()});
    container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
    const pixRepository = container.resolve<IPixRepository>(CoreConstants.IPixRepository);
    try {
      await pixRepository.getList();
    } catch (error) {
      expect(error).toThrowError();
    }
  });
  it("GetBy => When request success, return PaymentModel's array", async () => {
    class PixMockDatasource {
      getBy = jest.fn().mockImplementation(({id}:IProps) => {
        return pixModel;
      });
    };
    container.register(CoreConstants.IPixDatasource,{useValue: new PixMockDatasource()});
    container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
    const paymentDatasource = container.resolve<IPixRepository>(CoreConstants.IPixRepository);
    const response = await paymentDatasource.getBy({id:'1'});
    expect(response).toEqual(pixEntity);
  });
  it("GetBy => When get fail request should return Error", async () => {
    class PixMockDatasource {
      getBy = jest.fn().mockRejectedValue(({id}:IProps) => {
        throw Error;
      });
    };
    container.register(CoreConstants.IPixDatasource,{useValue: new PixMockDatasource()});
    container.register(CoreConstants.IPixRepository,{useClass: PixRepository});
    const pixDatasource = container.resolve<IPixRepository>(CoreConstants.IPixRepository);
    try {
      await pixDatasource.getBy({id:'1'});
    } catch (error) {
      expect(error).toThrowError();
    }
  });

})