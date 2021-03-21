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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Project extends Model { 
  static table = "projects";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    projectName: DataTypes.STRING,
    status: DataTypes.STRING,
    projectType: DataTypes.STRING,
    isActive: DataTypes.STRING,
    completeMethod: DataTypes.STRING,
    completed: DataTypes.STRING,
    fromTemplate: DataTypes.STRING,
    expectedStartDate: DataTypes.STRING,
    expectedEndDate: DataTypes.STRING,
    priority: DataTypes.STRING,
    department: DataTypes.STRING,
    customerDetails: DataTypes.STRING,
    customer: DataTypes.STRING,
    salesOrder: DataTypes.STRING,
    users: DataTypes.STRING,
    tasks: DataTypes.STRING,
    copiedFrom: DataTypes.STRING,
    notes: DataTypes.STRING,
    startAndEndDates: DataTypes.STRING,
    actualStartDate: DataTypes.STRING,
    actualTimeInHours: DataTypes.STRING,
    actualEndDate: DataTypes.STRING,
    costingAndBilling: DataTypes.STRING,
    estimatedCost: DataTypes.STRING,
    totalCostingAmountViaTimesheets: DataTypes.STRING,
    totalExpenseClaimViaExpenseClaims: DataTypes.STRING,
    totalPurchaseCostViaPurchaseInvoice: DataTypes.STRING,
    company: DataTypes.STRING,
    totalSalesAmountViaSalesOrder: DataTypes.STRING,
    totalBillableAmountViaTimesheets: DataTypes.STRING,
    totalBilledAmountViaSalesInvoices: DataTypes.STRING,
    totalConsumedMaterialCostViaStockEntry: DataTypes.STRING,
    defaultCostCenter: DataTypes.STRING,
    margin: DataTypes.STRING,
    grossMargin: DataTypes.STRING,
    monitorProgress: DataTypes.STRING,
    collectProgress: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    frequencyToCollectProgress: DataTypes.STRING,
    fromTime: DataTypes.STRING,
    toTime: DataTypes.STRING,
    firstEmail: DataTypes.STRING,
    secondEmail: DataTypes.STRING,
    dayToSend: DataTypes.STRING,
    timeToSend: DataTypes.STRING,
    message: DataTypes.STRING,
    
  };

}
