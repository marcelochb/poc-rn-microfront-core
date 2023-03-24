import { PixEntity } from "../../domain";

interface IProps {
  id: string,
  name: string,
  bank: string,
  date: string
  amount: string
}

export class PixModel extends PixEntity {
  id: string;
  name: string;
  bank: string;
  date: string;
  amount: string;

  constructor({id, name, bank, date, amount}:IProps) {
    super({id, name, bank, date, amount})
    this.id = id,
    this.name = name,
    this.bank = bank,
    this.date = date,
    this.amount = amount
  }

  static toEntity(payment: PixModel): PixEntity {
    return new PixEntity({
      id: payment.id,
      name: payment.name,
      bank: payment.bank,
      date: payment.date,
      amount: payment.amount
    });
  }

  static toEntityList(loans: PixModel[]): PixEntity[] {
    return loans.map(loan => this.toEntity(loan));
  }

  static fromMap(body: any): PixModel {
    return new PixModel({
      id: body.id,
      name: body.name,
      bank: body.bank,
      date: body.date,
      amount: `R$ ${Number.parseFloat(body.amount).toLocaleString("pt-BR")}`
    });
  }
}