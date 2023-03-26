interface IProps {
  id: string,
  name: string,
  bank: string,
  date: string
  amount: string
}
export class PixEntity {
  id: string;
  name: string;
  bank: string;
  date: string;
  amount: string;

  constructor ({
    id,
    name,
    bank,
    date,
    amount
  }:IProps) {
    this.id = id,
    this.name = name,
    this.bank = bank,
    this.date = date,
    this.amount = amount
  }
}