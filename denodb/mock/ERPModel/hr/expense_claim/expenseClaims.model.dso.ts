// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExpenseClaim
|--------------------------------------------------------------------------
|
| Model Class and Interface of expenseClaims
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("expenseClaims")
export class ExpenseClaim extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  fromEmployee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  expenseApprover!: string;
  
  @Field({ type: FieldType.STRING })
  approvalStatus!: string;
  
  @Field({ type: FieldType.STRING })
  totalClaimedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalSanctionedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  isPaid!: string;
  
  @Field({ type: FieldType.STRING })
  expenses!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  vehicleLog!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  task!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmountReimbursed!: string;
  
  @Field({ type: FieldType.STRING })
  remark!: string;
  
  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  employeesEmailId!: string;
  
  @Field({ type: FieldType.STRING })
  accountingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  payableAccount!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  moreDetails!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  advancePayments!: string;
  
  @Field({ type: FieldType.STRING })
  advances!: string;
  
  @Field({ type: FieldType.STRING })
  totalAdvanceAmount!: string;
  
  
}

export interface IExpenseClaim {
  id: number;
  series: string;
  fromEmployee: string;
  employeeName: string;
  department: string;
  expenseApprover: string;
  approvalStatus: string;
  totalClaimedAmount: string;
  totalSanctionedAmount: string;
  isPaid: string;
  expenses: string;
  postingDate: string;
  vehicleLog: string;
  project: string;
  task: string;
  totalAmountReimbursed: string;
  remark: string;
  title: string;
  employeesEmailId: string;
  accountingDetails: string;
  company: string;
  modeOfPayment: string;
  payableAccount: string;
  costCenter: string;
  moreDetails: string;
  status: string;
  amendedFrom: string;
  advancePayments: string;
  advances: string;
  totalAdvanceAmount: string;
  
}
