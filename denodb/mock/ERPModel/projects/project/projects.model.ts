// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Project
|--------------------------------------------------------------------------
|
| Model of projects
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
    
    : DataTypes.STRING,
    
    fromTemplate: DataTypes.STRING,
    
    expectedStartDate: DataTypes.STRING,
    
    expectedEndDate: DataTypes.STRING,
    
    priority: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    customerDetails: DataTypes.STRING,
    
    customer: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    salesOrder: DataTypes.STRING,
    
    users: DataTypes.STRING,
    
    users: DataTypes.STRING,
    
    tasks: DataTypes.STRING,
    
    tasks: DataTypes.STRING,
    
    copiedFrom: DataTypes.STRING,
    
    notes: DataTypes.STRING,
    
    notes: DataTypes.STRING,
    
    startAndEndDates: DataTypes.STRING,
    
    actualStartDate: DataTypes.STRING,
    
    actualTimeInHours: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    actualEndDate: DataTypes.STRING,
    
    costingAndBilling: DataTypes.STRING,
    
    estimatedCost: DataTypes.STRING,
    
    totalCostingAmountViaTimesheets: DataTypes.STRING,
    
    totalExpenseClaimViaExpenseClaims: DataTypes.STRING,
    
    totalPurchaseCostViaPurchaseInvoice: DataTypes.STRING,
    
    company: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    totalSalesAmountViaSalesOrder: DataTypes.STRING,
    
    totalBillableAmountViaTimesheets: DataTypes.STRING,
    
    totalBilledAmountViaSalesInvoices: DataTypes.STRING,
    
    totalConsumedMaterialCostViaStockEntry: DataTypes.STRING,
    
    defaultCostCenter: DataTypes.STRING,
    
    margin: DataTypes.STRING,
    
    grossMargin: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    grossMargin: DataTypes.STRING,
    
    monitorProgress: DataTypes.STRING,
    
    collectProgress: DataTypes.STRING,
    
    holidayList: DataTypes.STRING,
    
    frequencyToCollectProgress: DataTypes.STRING,
    
    fromTime: DataTypes.STRING,
    
    toTime: DataTypes.STRING,
    
    firstEmail: DataTypes.STRING,
    
    secondEmail: DataTypes.STRING,
    
    timeToSend: DataTypes.STRING,
    
    dayToSend: DataTypes.STRING,
    
    timeToSend: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    message: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'projectName',
      
        label: 'Project Name',
      
        type: 'input',
      
        placeholder: 'Input Project Name',
      
        options: '',
      },{
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object]',
      },{
        key: 'projectType',
      
        label: 'Project Type',
      
        type: 'select',
      
        placeholder: 'Input Project Type',
      
        options: '',
      },{
        key: 'isActive',
      
        label: 'Is Active',
      
        type: 'select',
      
        placeholder: 'Input Is Active',
      
        options: '[object Object]',
      },{
        key: 'completeMethod',
      
        label: 'Complete Method',
      
        type: 'select',
      
        placeholder: 'Input Complete Method',
      
        options: '[object Object],[object Object]',
      },{
        key: 'completed',
      
        label: 'Completed',
      
        type: 'input',
      
        placeholder: 'Input Completed',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'fromTemplate',
      
        label: 'From Template',
      
        type: 'select',
      
        placeholder: 'Input From Template',
      
        options: '',
      },{
        key: 'expectedStartDate',
      
        label: 'Expected Start Date',
      
        type: 'input',
      
        placeholder: 'Input Expected Start Date',
      
        options: '',
      },{
        key: 'expectedEndDate',
      
        label: 'Expected End Date',
      
        type: 'input',
      
        placeholder: 'Input Expected End Date',
      
        options: '',
      },{
        key: 'priority',
      
        label: 'Priority',
      
        type: 'select',
      
        placeholder: 'Input Priority',
      
        options: '[object Object],[object Object]',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: 'customerDetails',
      
        label: 'Customer Details',
      
        type: 'select',
      
        placeholder: 'Input Customer Details',
      
        options: '',
      },{
        key: 'customer',
      
        label: 'Customer',
      
        type: 'select',
      
        placeholder: 'Input Customer',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'salesOrder',
      
        label: 'Sales Order',
      
        type: 'select',
      
        placeholder: 'Input Sales Order',
      
        options: '',
      },{
        key: 'users',
      
        label: 'Users',
      
        type: 'input',
      
        placeholder: 'Input Users',
      
        options: '',
      },{
        key: 'users',
      
        label: 'Users',
      
        type: 'select',
      
        placeholder: 'Input Users',
      
        options: '',
      },{
        key: 'tasks',
      
        label: 'Tasks',
      
        type: 'select',
      
        placeholder: 'Input Tasks',
      
        options: '',
      },{
        key: 'tasks',
      
        label: 'Tasks',
      
        type: 'select',
      
        placeholder: 'Input Tasks',
      
        options: '',
      },{
        key: 'copiedFrom',
      
        label: 'Copied From',
      
        type: 'input',
      
        placeholder: 'Input Copied From',
      
        options: '',
      },{
        key: 'notes',
      
        label: 'Notes',
      
        type: 'select',
      
        placeholder: 'Input Notes',
      
        options: '',
      },{
        key: 'notes',
      
        label: 'Notes',
      
        type: 'input',
      
        placeholder: 'Input Notes',
      
        options: '',
      },{
        key: 'startAndEndDates',
      
        label: 'Start And End Dates',
      
        type: 'input',
      
        placeholder: 'Input Start And End Dates',
      
        options: '',
      },{
        key: 'actualStartDate',
      
        label: 'Actual Start Date',
      
        type: 'input',
      
        placeholder: 'Input Actual Start Date',
      
        options: '',
      },{
        key: 'actualTimeInHours',
      
        label: 'Actual Time In Hours',
      
        type: 'input',
      
        placeholder: 'Input Actual Time In Hours',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'actualEndDate',
      
        label: 'Actual End Date',
      
        type: 'input',
      
        placeholder: 'Input Actual End Date',
      
        options: '',
      },{
        key: 'costingAndBilling',
      
        label: 'Costing And Billing',
      
        type: 'select',
      
        placeholder: 'Input Costing And Billing',
      
        options: '',
      },{
        key: 'estimatedCost',
      
        label: 'Estimated Cost',
      
        type: 'select',
      
        placeholder: 'Input Estimated Cost',
      
        options: '',
      },{
        key: 'totalCostingAmountViaTimesheets',
      
        label: 'Total Costing Amount Via Timesheets',
      
        type: 'input',
      
        placeholder: 'Input Total Costing Amount Via Timesheets',
      
        options: '',
      },{
        key: 'totalExpenseClaimViaExpenseClaims',
      
        label: 'Total Expense Claim Via Expense Claims',
      
        type: 'input',
      
        placeholder: 'Input Total Expense Claim Via Expense Claims',
      
        options: '',
      },{
        key: 'totalPurchaseCostViaPurchaseInvoice',
      
        label: 'Total Purchase Cost Via Purchase Invoice',
      
        type: 'input',
      
        placeholder: 'Input Total Purchase Cost Via Purchase Invoice',
      
        options: '',
      },{
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'totalSalesAmountViaSalesOrder',
      
        label: 'Total Sales Amount Via Sales Order',
      
        type: 'input',
      
        placeholder: 'Input Total Sales Amount Via Sales Order',
      
        options: '',
      },{
        key: 'totalBillableAmountViaTimesheets',
      
        label: 'Total Billable Amount Via Timesheets',
      
        type: 'input',
      
        placeholder: 'Input Total Billable Amount Via Timesheets',
      
        options: '',
      },{
        key: 'totalBilledAmountViaSalesInvoices',
      
        label: 'Total Billed Amount Via Sales Invoices',
      
        type: 'input',
      
        placeholder: 'Input Total Billed Amount Via Sales Invoices',
      
        options: '',
      },{
        key: 'totalConsumedMaterialCostViaStockEntry',
      
        label: 'Total Consumed Material Cost Via Stock Entry',
      
        type: 'input',
      
        placeholder: 'Input Total Consumed Material Cost Via Stock Entry',
      
        options: '',
      },{
        key: 'defaultCostCenter',
      
        label: 'Default Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Default Cost Center',
      
        options: '',
      },{
        key: 'margin',
      
        label: 'Margin',
      
        type: 'input',
      
        placeholder: 'Input Margin',
      
        options: '',
      },{
        key: 'grossMargin',
      
        label: 'Gross Margin',
      
        type: 'select',
      
        placeholder: 'Input Gross Margin',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'grossMargin',
      
        label: 'Gross Margin',
      
        type: 'input',
      
        placeholder: 'Input Gross Margin',
      
        options: '',
      },{
        key: 'monitorProgress',
      
        label: 'Monitor Progress',
      
        type: 'input',
      
        placeholder: 'Input Monitor Progress',
      
        options: '',
      },{
        key: 'collectProgress',
      
        label: 'Collect Progress',
      
        type: 'input',
      
        placeholder: 'Input Collect Progress',
      
        options: '',
      },{
        key: 'holidayList',
      
        label: 'Holiday List',
      
        type: 'select',
      
        placeholder: 'Input Holiday List',
      
        options: '',
      },{
        key: 'frequencyToCollectProgress',
      
        label: 'Frequency To Collect Progress',
      
        type: 'select',
      
        placeholder: 'Input Frequency To Collect Progress',
      
        options: '[object Object],[object Object],[object Object]',
      },{
        key: 'fromTime',
      
        label: 'From Time',
      
        type: 'input',
      
        placeholder: 'Input From Time',
      
        options: '',
      },{
        key: 'toTime',
      
        label: 'To Time',
      
        type: 'input',
      
        placeholder: 'Input To Time',
      
        options: '',
      },{
        key: 'firstEmail',
      
        label: 'First Email',
      
        type: 'input',
      
        placeholder: 'Input First Email',
      
        options: '',
      },{
        key: 'secondEmail',
      
        label: 'Second Email',
      
        type: 'input',
      
        placeholder: 'Input Second Email',
      
        options: '',
      },{
        key: 'timeToSend',
      
        label: 'Time To Send',
      
        type: 'input',
      
        placeholder: 'Input Time To Send',
      
        options: '',
      },{
        key: 'dayToSend',
      
        label: 'Day To Send',
      
        type: 'select',
      
        placeholder: 'Input Day To Send',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      },{
        key: 'timeToSend',
      
        label: 'Time To Send',
      
        type: 'input',
      
        placeholder: 'Input Time To Send',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'message',
      
        label: 'Message',
      
        type: 'input',
      
        placeholder: 'Input Message',
      
        options: '',
      },
    ]
  };
} 
