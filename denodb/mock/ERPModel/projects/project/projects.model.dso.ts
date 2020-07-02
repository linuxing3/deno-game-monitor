// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Project
|--------------------------------------------------------------------------
|
| Model Class and Interface of projects
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projects")
export class Project extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  projectName!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  projectType!: string;
  
  @Field({ type: FieldType.STRING })
  isActive!: string;
  
  @Field({ type: FieldType.STRING })
  completeMethod!: string;
  
  @Field({ type: FieldType.STRING })
  completed!: string;
  
  @Field({ type: FieldType.STRING })
  fromTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  expectedStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  expectedEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  priority!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  customerDetails!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  salesOrder!: string;
  
  @Field({ type: FieldType.STRING })
  users!: string;
  
  @Field({ type: FieldType.STRING })
  tasks!: string;
  
  @Field({ type: FieldType.STRING })
  copiedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  notes!: string;
  
  @Field({ type: FieldType.STRING })
  startAndEndDates!: string;
  
  @Field({ type: FieldType.STRING })
  actualStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  actualTimeInHours!: string;
  
  @Field({ type: FieldType.STRING })
  actualEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  costingAndBilling!: string;
  
  @Field({ type: FieldType.STRING })
  estimatedCost!: string;
  
  @Field({ type: FieldType.STRING })
  totalCostingAmountViaTimesheets!: string;
  
  @Field({ type: FieldType.STRING })
  totalExpenseClaimViaExpenseClaims!: string;
  
  @Field({ type: FieldType.STRING })
  totalPurchaseCostViaPurchaseInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  totalSalesAmountViaSalesOrder!: string;
  
  @Field({ type: FieldType.STRING })
  totalBillableAmountViaTimesheets!: string;
  
  @Field({ type: FieldType.STRING })
  totalBilledAmountViaSalesInvoices!: string;
  
  @Field({ type: FieldType.STRING })
  totalConsumedMaterialCostViaStockEntry!: string;
  
  @Field({ type: FieldType.STRING })
  defaultCostCenter!: string;
  
  @Field({ type: FieldType.STRING })
  margin!: string;
  
  @Field({ type: FieldType.STRING })
  grossMargin!: string;
  
  @Field({ type: FieldType.STRING })
  monitorProgress!: string;
  
  @Field({ type: FieldType.STRING })
  collectProgress!: string;
  
  @Field({ type: FieldType.STRING })
  holidayList!: string;
  
  @Field({ type: FieldType.STRING })
  frequencyToCollectProgress!: string;
  
  @Field({ type: FieldType.STRING })
  fromTime!: string;
  
  @Field({ type: FieldType.STRING })
  toTime!: string;
  
  @Field({ type: FieldType.STRING })
  firstEmail!: string;
  
  @Field({ type: FieldType.STRING })
  secondEmail!: string;
  
  @Field({ type: FieldType.STRING })
  dayToSend!: string;
  
  @Field({ type: FieldType.STRING })
  timeToSend!: string;
  
  @Field({ type: FieldType.STRING })
  message!: string;
  
  
}

export interface IProject {
  id: number;
  projectName: string;
  status: string;
  projectType: string;
  isActive: string;
  completeMethod: string;
  completed: string;
  fromTemplate: string;
  expectedStartDate: string;
  expectedEndDate: string;
  priority: string;
  department: string;
  customerDetails: string;
  customer: string;
  salesOrder: string;
  users: string;
  tasks: string;
  copiedFrom: string;
  notes: string;
  startAndEndDates: string;
  actualStartDate: string;
  actualTimeInHours: string;
  actualEndDate: string;
  costingAndBilling: string;
  estimatedCost: string;
  totalCostingAmountViaTimesheets: string;
  totalExpenseClaimViaExpenseClaims: string;
  totalPurchaseCostViaPurchaseInvoice: string;
  company: string;
  totalSalesAmountViaSalesOrder: string;
  totalBillableAmountViaTimesheets: string;
  totalBilledAmountViaSalesInvoices: string;
  totalConsumedMaterialCostViaStockEntry: string;
  defaultCostCenter: string;
  margin: string;
  grossMargin: string;
  monitorProgress: string;
  collectProgress: string;
  holidayList: string;
  frequencyToCollectProgress: string;
  fromTime: string;
  toTime: string;
  firstEmail: string;
  secondEmail: string;
  dayToSend: string;
  timeToSend: string;
  message: string;
  
}
