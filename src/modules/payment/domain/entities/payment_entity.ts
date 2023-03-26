interface IProps {
  id: string,
  recipient: string,
  payer: string,
  dueDate: string
  amount: string
}
export class PaymentEntity {
  id: string;
  recipient: string;
  payer: string;
  dueDate: string;
  amount: string;

  constructor ({
    id,
    recipient,
    payer,
    dueDate,
    amount
  }:IProps) {
    this.id = id,
    this.recipient = recipient,
    this.payer = payer,
    this.dueDate = dueDate,
    this.amount = amount
  }
}