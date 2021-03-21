// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalarySlip
|--------------------------------------------------------------------------
|
| Model Class and Interface of salarySlips
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salarySlips")
export class SalarySlip extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  journalEntry!: string;
  
  @Field({ type: FieldType.STRING })
  payrollEntry!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipBasedOnTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  salaryStructure!: string;
  
  @Field({ type: FieldType.STRING })
  payrollFrequency!: string;
  
  @Field({ type: FieldType.STRING })
  workingDays!: string;
  
  @Field({ type: FieldType.STRING })
  leaveWithoutPay!: string;
  
  @Field({ type: FieldType.STRING })
  paymentDays!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  totalWorkingHours!: string;
  
  @Field({ type: FieldType.STRING })
  hourRate!: string;
  
  @Field({ type: FieldType.STRING })
  bankName!: string;
  
  @Field({ type: FieldType.STRING })
  bankAccountNo!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  deductTaxForUnclaimedEmployeeBenefits!: string;
  
  @Field({ type: FieldType.STRING })
  deductTaxForUnsubmittedTaxExemptionProof!: string;
  
  @Field({ type: FieldType.STRING })
  earningDeduction!: string;
  
  @Field({ type: FieldType.STRING })
  earning!: string;
  
  @Field({ type: FieldType.STRING })
  earnings!: string;
  
  @Field({ type: FieldType.STRING })
  deduction!: string;
  
  @Field({ type: FieldType.STRING })
  deductions!: string;
  
  @Field({ type: FieldType.STRING })
  grossPay!: string;
  
  @Field({ type: FieldType.STRING })
  totalDeduction!: string;
  
  @Field({ type: FieldType.STRING })
  loanRepayment!: string;
  
  @Field({ type: FieldType.STRING })
  employeeLoan!: string;
  
  @Field({ type: FieldType.STRING })
  totalPrincipalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalInterestAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalLoanRepayment!: string;
  
  @Field({ type: FieldType.STRING })
  netPayInfo!: string;
  
  @Field({ type: FieldType.STRING })
  netPay!: string;
  
  @Field({ type: FieldType.STRING })
  roundedTotal!: string;
  
  @Field({ type: FieldType.STRING })
  totalInWords!: string;
  
  
}

export interface ISalarySlip {
  id: number;
  postingDate: string;
  employee: string;
  employeeName: string;
  department: string;
  designation: string;
  branch: string;
  status: string;
  journalEntry: string;
  payrollEntry: string;
  company: string;
  letterHead: string;
  salarySlipBasedOnTimesheet: string;
  startDate: string;
  endDate: string;
  salaryStructure: string;
  payrollFrequency: string;
  workingDays: string;
  leaveWithoutPay: string;
  paymentDays: string;
  salarySlipTimesheet: string;
  totalWorkingHours: string;
  hourRate: string;
  bankName: string;
  bankAccountNo: string;
  amendedFrom: string;
  deductTaxForUnclaimedEmployeeBenefits: string;
  deductTaxForUnsubmittedTaxExemptionProof: string;
  earningDeduction: string;
  earning: string;
  earnings: string;
  deduction: string;
  deductions: string;
  grossPay: string;
  totalDeduction: string;
  loanRepayment: string;
  employeeLoan: string;
  totalPrincipalAmount: string;
  totalInterestAmount: string;
  totalLoanRepayment: string;
  netPayInfo: string;
  netPay: string;
  roundedTotal: string;
  totalInWords: string;
  
}
