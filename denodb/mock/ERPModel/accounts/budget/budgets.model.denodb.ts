// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Budget
|--------------------------------------------------------------------------
|
| Model Class and Interface of budgets
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class Budget extends Model { 
  static table = "budgets";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    budgetAgainst: DataTypes.STRING,
    company: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    project: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    monthlyDistribution: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    controlAction: DataTypes.STRING,
    applicableOnMaterialRequest: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnMr: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnMr: DataTypes.STRING,
    applicableOnPurchaseOrder: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnPo: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnPo: DataTypes.STRING,
    applicableOnBookingActualExpenses: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnActual: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnActual: DataTypes.STRING,
    budgetAccounts: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'budgetAgainst',
        label: 'Budget Against',
        type: 'select',
        placeholder: 'Input Budget Against',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
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
        key: 'fiscalYear',
        label: 'Fiscal Year',
        type: 'select',
        placeholder: 'Input Fiscal Year',
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
        key: 'monthlyDistribution',
        label: 'Monthly Distribution',
        type: 'select',
        placeholder: 'Input Monthly Distribution',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      {
        key: 'controlAction',
        label: 'Control Action',
        type: 'input',
        placeholder: 'Input Control Action',
        options: '',
        
      },
      {
        key: 'applicableOnMaterialRequest',
        label: 'Applicable On Material Request',
        type: 'input',
        placeholder: 'Input Applicable On Material Request',
        options: '',
        
      },
      {
        key: 'actionIfAnnualBudgetExceededOnMr',
        label: 'Action If Annual Budget Exceeded On Mr',
        type: 'select',
        placeholder: 'Input Action If Annual Budget Exceeded On Mr',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'actionIfAccumulatedMonthlyBudgetExceededOnMr',
        label: 'Action If Accumulated Monthly Budget Exceeded On Mr',
        type: 'select',
        placeholder: 'Input Action If Accumulated Monthly Budget Exceeded On Mr',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'applicableOnPurchaseOrder',
        label: 'Applicable On Purchase Order',
        type: 'input',
        placeholder: 'Input Applicable On Purchase Order',
        options: '',
        
      },
      {
        key: 'actionIfAnnualBudgetExceededOnPo',
        label: 'Action If Annual Budget Exceeded On Po',
        type: 'select',
        placeholder: 'Input Action If Annual Budget Exceeded On Po',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'actionIfAccumulatedMonthlyBudgetExceededOnPo',
        label: 'Action If Accumulated Monthly Budget Exceeded On Po',
        type: 'select',
        placeholder: 'Input Action If Accumulated Monthly Budget Exceeded On Po',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'applicableOnBookingActualExpenses',
        label: 'Applicable On Booking Actual Expenses',
        type: 'input',
        placeholder: 'Input Applicable On Booking Actual Expenses',
        options: '',
        
      },
      {
        key: 'actionIfAnnualBudgetExceededOnActual',
        label: 'Action If Annual Budget Exceeded On Actual',
        type: 'select',
        placeholder: 'Input Action If Annual Budget Exceeded On Actual',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'actionIfAccumulatedMonthlyBudgetExceededOnActual',
        label: 'Action If Accumulated Monthly Budget Exceeded On Actual',
        type: 'select',
        placeholder: 'Input Action If Accumulated Monthly Budget Exceeded On Actual',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'budgetAccounts',
        label: 'Budget Accounts',
        type: 'select',
        placeholder: 'Input Budget Accounts',
        options: '',
        
      },
      
    ]
  };
}

export interface IBudget {
  id: FieldValue;
  budgetAgainst: FieldValue;
  company: FieldValue;
  costCenter: FieldValue;
  project: FieldValue;
  fiscalYear: FieldValue;
  monthlyDistribution: FieldValue;
  amendedFrom: FieldValue;
  controlAction: FieldValue;
  applicableOnMaterialRequest: FieldValue;
  actionIfAnnualBudgetExceededOnMr: FieldValue;
  actionIfAccumulatedMonthlyBudgetExceededOnMr: FieldValue;
  applicableOnPurchaseOrder: FieldValue;
  actionIfAnnualBudgetExceededOnPo: FieldValue;
  actionIfAccumulatedMonthlyBudgetExceededOnPo: FieldValue;
  applicableOnBookingActualExpenses: FieldValue;
  actionIfAnnualBudgetExceededOnActual: FieldValue;
  actionIfAccumulatedMonthlyBudgetExceededOnActual: FieldValue;
  budgetAccounts: FieldValue;
  
}
