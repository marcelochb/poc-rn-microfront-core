import { PaymentEntity } from "../../domain";
import { PaymentModel } from "../../infra/models";
export const paymentEntity = new PaymentEntity({id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const paymentEntityList = [paymentEntity];
export const paymentModel = new PaymentModel({id: '1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const paymentModelList = [paymentModel];
export const paymentJson = {id:'1', recipient: 'teste', payer: 'payer', dueDate: '10/10/2023', amount: '10'};
export const paymentJsonList = [paymentJson];