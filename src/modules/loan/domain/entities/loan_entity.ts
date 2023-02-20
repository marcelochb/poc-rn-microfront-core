interface IProps {
  id: string,
  name: string,
  type: string,
  amount: number
}
export class LoanEntity {
  id: string;
  name: string;
  type: string;
  amount: number;

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