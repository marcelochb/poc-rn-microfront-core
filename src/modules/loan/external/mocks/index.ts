import { LoanEntity } from "../../domain";
import { LoanModel } from "../../infra";
export const loanModel = new LoanModel({id:'1', name: 'teste', type: 'tipo', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const loanModelList = [loanModel];
export const loanEntity = new LoanEntity({id:'1', name: 'teste', type: 'tipo', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const loanEntityList = [loanEntity];
export const loanJson = {id:'1', name: 'teste', type: 'tipo', amount: '10'};
export const loanJsonList = [loanJson];