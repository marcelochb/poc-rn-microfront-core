import { LoanEntity } from "../../domain";

interface IProps {
  id: string,
  name: string,
  type: string,
  amount: number
}

export class LoanModel extends LoanEntity {
  id: string;
  name: string;
  type: string;
  amount: number;

  constructor({id, name, type, amount}:IProps) {
    super({id, name, type, amount})
    this.id = id,
    this.name = name,
    this.type = type,
    this.amount = amount
  }

  static toEntity(loan: LoanModel): LoanEntity {
    return new LoanEntity({
      id: loan.id,
      name: loan.name,
      type: loan.type,
      amount: loan.amount
    });
  }

  static toEntityList(loans: LoanModel[]): LoanEntity[] {
    return loans.map(loan => this.toEntity(loan));
  }

  static fromMap(body: any): LoanModel {
    return new LoanModel({
      id: body.id,
      name: body.name,
      type: body.type,
      amount: body.amount
    });
  }

  static fromEntity(loan: LoanModel): LoanEntity {
    return new LoanEntity({
      id: loan.id,
      name: loan.name,
      type: loan.type,
      amount: loan.amount
    });
  }
}