import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { PixEntity } from "../../domain";
import { PixModel } from "../../infra/models";
export const pixEntity = new PixEntity({id:'1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const pixEntityList = [pixEntity];
export const pixModel = new PixModel({id: '1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: Number.parseFloat('10').toLocaleString("pt-BR",{minimumFractionDigits:2, style: 'currency', currency: 'BRL'})});
export const pixModelList = [pixModel];
export const pixJson = {id: '1', name: 'teste', bank: 'bank', date: '10/10/2023', amount: '10'};
export const pixJsonList = [pixJson];