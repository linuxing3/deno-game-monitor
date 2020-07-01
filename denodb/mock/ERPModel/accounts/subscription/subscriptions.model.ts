// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Subscription
|--------------------------------------------------------------------------
|
| Model of subscriptions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Subscription extends Model { 
  static table = "subscriptions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    customer: DataTypes.STRING,
    status: DataTypes.STRING,
    subscriptionPeriod: DataTypes.STRING,
    subscriptionStartDate: DataTypes.STRING,
    cancelationDate: DataTypes.STRING,
    trialPeriodStartDate: DataTypes.STRING,
    trialPeriodEndDate: DataTypes.STRING,
    currentInvoiceStartDate: DataTypes.STRING,
    currentInvoiceEndDate: DataTypes.STRING,
    daysUntilDue: DataTypes.STRING,
    cancelAtEndOfPeriod: DataTypes.STRING,
    generateInvoiceAtBeginningOfPeriod: DataTypes.STRING,
    plans: DataTypes.STRING,
    plans: DataTypes.STRING,
    taxes: DataTypes.STRING,
    salesTaxesAndChargesTemplate: DataTypes.STRING,
    discounts: DataTypes.STRING,
    applyAdditionalDiscountOn: DataTypes.STRING,
    additionalDIscountPercentage: DataTypes.STRING,
    additionalDIscountAmount: DataTypes.STRING,
    invoices: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'customer',
      
        label: 'Customer',
      
        type: 'select',
      
        placeholder: 'Input Customer',
      
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
        
        key: 'subscriptionPeriod',
      
        label: 'Subscription Period',
      
        type: 'input',
      
        placeholder: 'Input Subscription Period',
      
        options: '',
      
      },
      {
        
        key: 'subscriptionStartDate',
      
        label: 'Subscription Start Date',
      
        type: 'input',
      
        placeholder: 'Input Subscription Start Date',
      
        options: '',
      
      },
      {
        
        key: 'cancelationDate',
      
        label: 'Cancelation Date',
      
        type: 'input',
      
        placeholder: 'Input Cancelation Date',
      
        options: '',
      
      },
      {
        
        key: 'trialPeriodStartDate',
      
        label: 'Trial Period Start Date',
      
        type: 'input',
      
        placeholder: 'Input Trial Period Start Date',
      
        options: '',
      
      },
      {
        
        key: 'trialPeriodEndDate',
      
        label: 'Trial Period End Date',
      
        type: 'input',
      
        placeholder: 'Input Trial Period End Date',
      
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
        
        key: 'currentInvoiceStartDate',
      
        label: 'Current Invoice Start Date',
      
        type: 'input',
      
        placeholder: 'Input Current Invoice Start Date',
      
        options: '',
      
      },
      {
        
        key: 'currentInvoiceEndDate',
      
        label: 'Current Invoice End Date',
      
        type: 'input',
      
        placeholder: 'Input Current Invoice End Date',
      
        options: '',
      
      },
      {
        
        key: 'daysUntilDue',
      
        label: 'Days Until Due',
      
        type: 'input',
      
        placeholder: 'Input Days Until Due',
      
        options: '',
      
      },
      {
        
        key: 'cancelAtEndOfPeriod',
      
        label: 'Cancel At End Of Period',
      
        type: 'input',
      
        placeholder: 'Input Cancel At End Of Period',
      
        options: '',
      
      },
      {
        
        key: 'generateInvoiceAtBeginningOfPeriod',
      
        label: 'Generate Invoice At Beginning Of Period',
      
        type: 'input',
      
        placeholder: 'Input Generate Invoice At Beginning Of Period',
      
        options: '',
      
      },
      {
        
        key: 'plans',
      
        label: 'Plans',
      
        type: 'input',
      
        placeholder: 'Input Plans',
      
        options: '',
      
      },
      {
        
        key: 'plans',
      
        label: 'Plans',
      
        type: 'select',
      
        placeholder: 'Input Plans',
      
        options: '',
      
      },
      {
        
        key: 'taxes',
      
        label: 'Taxes',
      
        type: 'input',
      
        placeholder: 'Input Taxes',
      
        options: '',
      
      },
      {
        
        key: 'salesTaxesAndChargesTemplate',
      
        label: 'Sales Taxes And Charges Template',
      
        type: 'select',
      
        placeholder: 'Input Sales Taxes And Charges Template',
      
        options: '',
      
      },
      {
        
        key: 'discounts',
      
        label: 'Discounts',
      
        type: 'input',
      
        placeholder: 'Input Discounts',
      
        options: '',
      
      },
      {
        
        key: 'applyAdditionalDiscountOn',
      
        label: 'Apply Additional Discount On',
      
        type: 'select',
      
        placeholder: 'Input Apply Additional Discount On',
      
        options: '[object Object],[object Object]',
      
      },
      {
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      
      },
      {
        
        key: 'additionalDIscountPercentage',
      
        label: 'Additional D Iscount Percentage',
      
        type: 'input',
      
        placeholder: 'Input Additional D Iscount Percentage',
      
        options: '',
      
      },
      {
        
        key: 'additionalDIscountAmount',
      
        label: 'Additional D Iscount Amount',
      
        type: 'input',
      
        placeholder: 'Input Additional D Iscount Amount',
      
        options: '',
      
      },
      {
        
        key: 'invoices',
      
        label: 'Invoices',
      
        type: 'input',
      
        placeholder: 'Input Invoices',
      
        options: '',
      
      },
      {
        
        key: 'invoices',
      
        label: 'Invoices',
      
        type: 'select',
      
        placeholder: 'Input Invoices',
      
        options: '',
      
      },
      
    ]
  };
} 
