// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTerms
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


export class PaymentTerm extends Model { 
  static table = "paymentTerms";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTermName: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    dueDateBasedOn: DataTypes.STRING,
    creditDays: DataTypes.STRING,
    creditMonths: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'paymentTermName',
        label: 'Payment Term Name',
        type: 'input',
        placeholder: 'Input Payment Term Name',
        options: '',
        
      },
      {
        key: 'invoicePortion',
        label: 'Invoice Portion',
        type: 'input',
        placeholder: 'Input Invoice Portion',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
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
        key: 'dueDateBasedOn',
        label: 'Due Date Based On',
        type: 'select',
        placeholder: 'Input Due Date Based On',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'creditDays',
        label: 'Credit Days',
        type: 'input',
        placeholder: 'Input Credit Days',
        options: '',
        
      },
      {
        key: 'creditMonths',
        label: 'Credit Months',
        type: 'input',
        placeholder: 'Input Credit Months',
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      
    ]
  };
}

export interface IPaymentTerm {
  id: FieldValue;
  paymentTermName: FieldValue;
  invoicePortion: FieldValue;
  modeOfPayment: FieldValue;
  dueDateBasedOn: FieldValue;
  creditDays: FieldValue;
  creditMonths: FieldValue;
  description: FieldValue;
  
}
