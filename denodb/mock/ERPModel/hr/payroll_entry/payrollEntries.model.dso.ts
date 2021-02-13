// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PayrollEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of payrollEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("payrollEntries")
export class PayrollEntry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  selectEmployees!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  payrollFrequency!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  employees!: string;
  
  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  numberOfEmployees!: string;
  
  @Field({ type: FieldType.STRING })
  employeeDetails!: string;
  
  @Field({ type: FieldType.STRING })
  validateAttendance!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipBasedOnTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  selectPayrollPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  deductTaxForUnclaimedEmployeeBenefits!: string;
  
  @Field({ type: FieldType.STRING })
  deductTaxForUnsubmittedTaxExemptionProof!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  paymentEntry!: string;
  
  @Field({ type: FieldType.STRING })
  paymentAccount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipsCreated!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlipsSubmitted!: string;
  
  
}

export interface IPayrollEntry {
  id: number;
  selectEmployees: string;
  postingDate: string;
  payrollFrequency: string;
  company: string;
  employees: string;
  branch: string;
  department: string;
  designation: string;
  numberOfEmployees: string;
  employeeDetails: string;
  validateAttendance: string;
  salarySlipBasedOnTimesheet: string;
  selectPayrollPeriod: string;
  startDate: string;
  endDate: string;
  deductTaxForUnclaimedEmployeeBenefits: string;
  deductTaxForUnsubmittedTaxExemptionProof: string;
  accounts: string;
  costCenter: string;
  project: string;
  paymentEntry: string;
  paymentAccount: string;
  amendedFrom: string;
  salarySlipsCreated: string;
  salarySlipsSubmitted: string;
  
}
