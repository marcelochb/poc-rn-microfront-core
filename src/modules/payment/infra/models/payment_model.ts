import { PaymentEntity } from "../../domain";

interface IProps {
  id: string,
  recipient: string,
  payer: string,
  dueDate: string
  amount: string
}

export class PaymentModel extends PaymentEntity {
  id: string;
  recipient: string;
  payer: string;
  dueDate: string;
  amount: string;

  constructor({id, recipient, payer, dueDate, amount}:IProps) {
    super({id, recipient, payer, dueDate, amount})
    this.id = id,
    this.recipient = recipient,
    this.payer = payer,
    this.dueDate = dueDate,
    this.amount = amount
  }

  static toEntity(payment: PaymentModel): PaymentEntity {
    return new PaymentEntity({
      id: payment.id,
      recipient: payment.recipient,
      payer: payment.payer,
      dueDate: payment.dueDate,
      amount: payment.amount
    });
  }

  static toEntityList(loans: PaymentModel[]): PaymentEntity[] {
    return loans.map(loan => this.toEntity(loan));
  }

  static fromMap(body: any): PaymentModel {
    return new PaymentModel({
      id: body.id,
      recipient: body.recipient,
      payer: body.payer,
      dueDate: body.dueDate,
      amount: `R$ ${Number.parseFloat(body.amount).toLocaleString("pt-BR")}`
    });
  }

  static fromEntity(payment: PaymentModel): PaymentEntity {
    return new PaymentEntity({
      id: payment.id,
      recipient: payment.recipient,
      payer: payment.payer,
      dueDate: payment.dueDate,
      amount: payment.amount
    });
  }
}