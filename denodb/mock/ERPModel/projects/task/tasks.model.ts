// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Task
|--------------------------------------------------------------------------
|
| Model of tasks
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Task extends Model { 
  static table = "tasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    subject: DataTypes.STRING,
    project: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    parentTask: DataTypes.STRING,
    expectedStartDate: DataTypes.STRING,
    expectedTimeInHours: DataTypes.STRING,
    weight: DataTypes.STRING,
    expectedEndDate: DataTypes.STRING,
    progress: DataTypes.STRING,
    isMilestone: DataTypes.STRING,
    color: DataTypes.STRING,
    details: DataTypes.STRING,
    dependsOn: DataTypes.STRING,
    dependsOn: DataTypes.STRING,
    dependsOnTasks: DataTypes.STRING,
    actualStartDateViaTimeSheet: DataTypes.STRING,
    actualTimeInHours: DataTypes.STRING,
    actualEndDateViaTimeSheet: DataTypes.STRING,
    totalCostingAmountViaTimeSheet: DataTypes.STRING,
    totalExpenseClaimViaExpenseClaim: DataTypes.STRING,
    totalBillingAmountViaTimeSheet: DataTypes.STRING,
    reviewDate: DataTypes.STRING,
    closingDate: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'subject',
        label: 'Subject',
        type: 'input',
        placeholder: 'Input Subject',
        options: '',
        
      },
      {
        key: 'project',
        label: 'Project',
        type: 'select',
        placeholder: 'Input Project',
        options: '',
        
      },
      {
        key: 'isGroup',
        label: 'Is Group',
        type: 'input',
        placeholder: 'Input Is Group',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'priority',
        label: 'Priority',
        type: 'select',
        placeholder: 'Input Priority',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'parentTask',
        label: 'Parent Task',
        type: 'select',
        placeholder: 'Input Parent Task',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'expectedStartDate',
        label: 'Expected Start Date',
        type: 'input',
        placeholder: 'Input Expected Start Date',
        options: '',
        
      },
      {
        key: 'expectedTimeInHours',
        label: 'Expected Time In Hours',
        type: 'input',
        placeholder: 'Input Expected Time In Hours',
        options: '',
        
      },
      {
        key: 'weight',
        label: 'Weight',
        type: 'input',
        placeholder: 'Input Weight',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'expectedEndDate',
        label: 'Expected End Date',
        type: 'input',
        placeholder: 'Input Expected End Date',
        options: '',
        
      },
      {
        key: 'progress',
        label: 'Progress',
        type: 'input',
        placeholder: 'Input Progress',
        options: '',
        
      },
      {
        key: 'isMilestone',
        label: 'Is Milestone',
        type: 'input',
        placeholder: 'Input Is Milestone',
        options: '',
        
      },
      {
        key: 'color',
        label: 'Color',
        type: 'input',
        placeholder: 'Input Color',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'details',
        label: 'Details',
        type: 'input',
        placeholder: 'Input Details',
        options: '',
        
      },
      {
        key: 'dependsOn',
        label: 'Depends On',
        type: 'input',
        placeholder: 'Input Depends On',
        options: '',
        
      },
      {
        key: 'dependsOn',
        label: 'Depends On',
        type: 'select',
        placeholder: 'Input Depends On',
        options: '',
        
      },
      {
        key: 'dependsOnTasks',
        label: 'Depends On Tasks',
        type: 'input',
        placeholder: 'Input Depends On Tasks',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'actualStartDateViaTimeSheet',
        label: 'Actual Start Date Via Time Sheet',
        type: 'input',
        placeholder: 'Input Actual Start Date Via Time Sheet',
        options: '',
        
      },
      {
        key: 'actualTimeInHours',
        label: 'Actual Time In Hours',
        type: 'input',
        placeholder: 'Input Actual Time In Hours',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'actualEndDateViaTimeSheet',
        label: 'Actual End Date Via Time Sheet',
        type: 'input',
        placeholder: 'Input Actual End Date Via Time Sheet',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'totalCostingAmountViaTimeSheet',
        label: 'Total Costing Amount Via Time Sheet',
        type: 'select',
        placeholder: 'Input Total Costing Amount Via Time Sheet',
        options: '',
        
      },
      {
        key: 'totalExpenseClaimViaExpenseClaim',
        label: 'Total Expense Claim Via Expense Claim',
        type: 'select',
        placeholder: 'Input Total Expense Claim Via Expense Claim',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'totalBillingAmountViaTimeSheet',
        label: 'Total Billing Amount Via Time Sheet',
        type: 'input',
        placeholder: 'Input Total Billing Amount Via Time Sheet',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'reviewDate',
        label: 'Review Date',
        type: 'input',
        placeholder: 'Input Review Date',
        options: '',
        
      },
      {
        key: 'closingDate',
        label: 'Closing Date',
        type: 'input',
        placeholder: 'Input Closing Date',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'lft',
        label: 'Lft',
        type: 'input',
        placeholder: 'Input Lft',
        options: '',
        
      },
      {
        key: 'rgt',
        label: 'Rgt',
        type: 'input',
        placeholder: 'Input Rgt',
        options: '',
        
      },
      {
        key: 'oldParent',
        label: 'Old Parent',
        type: 'input',
        placeholder: 'Input Old Parent',
        options: '',
        
      },
      
    ]
  };
} 
