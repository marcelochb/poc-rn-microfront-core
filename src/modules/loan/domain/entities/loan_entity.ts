interface IProps {
  id: string,
  name: string,
  type: string,
  amount: string
}
export class LoanEntity {
  id: string;
  name: string;
  type: string;
  amount: string;

  constructor ({
    id,
    name,
    type,
    amount
  }:IProps) {
    this.id = id,
    this.name = name,
    this.type = type,
    this.amount = amount
  }
}