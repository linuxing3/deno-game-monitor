// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Timesheet
|--------------------------------------------------------------------------
|
| Model Class and Interface of timesheets
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("timesheets")
export class Timesheet extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  salesInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  salarySlip!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  employeeDetail!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  user!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  timeSheets!: string;
  
  @Field({ type: FieldType.STRING })
  totalWorkingHours!: string;
  
  @Field({ type: FieldType.STRING })
  billingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  totalBillableHours!: string;
  
  @Field({ type: FieldType.STRING })
  totalBilledHours!: string;
  
  @Field({ type: FieldType.STRING })
  totalCostingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalBillableAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalBilledAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amountBilled!: string;
  
  @Field({ type: FieldType.STRING })
  note!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ITimesheet {
  id: number;
  title: string;
  series: string;
  company: string;
  salesInvoice: string;
  salarySlip: string;
  status: string;
  employeeDetail: string;
  employee: string;
  employeeName: string;
  department: string;
  user: string;
  startDate: string;
  endDate: string;
  timeSheets: string;
  totalWorkingHours: string;
  billingDetails: string;
  totalBillableHours: string;
  totalBilledHours: string;
  totalCostingAmount: string;
  totalBillableAmount: string;
  totalBilledAmount: string;
  amountBilled: string;
  note: string;
  amendedFrom: string;
  
}
