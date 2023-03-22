import { PaymentEntity } from "../../domain";
import { PaymentModel } from "../../infra/models";
export const paymentEntity = new PaymentEntity({id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: 'R$ 10'});
export const paymentEntityList = [paymentEntity];
export const paymentModel = new PaymentModel({id: '1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: 'R$ 10'});
export const paymentModelList = [paymentModel]