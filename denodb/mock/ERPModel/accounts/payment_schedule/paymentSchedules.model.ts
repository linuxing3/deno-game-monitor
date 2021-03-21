// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentSchedule
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentSchedules
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


export class PaymentSchedule extends Model { 
  static table = "paymentSchedules";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTerm: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    paymentAmount: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'paymentTerm',
        label: 'Payment Term',
        type: 'select',
        placeholder: 'Input Payment Term',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'dueDate',
        label: 'Due Date',
        type: 'input',
        placeholder: 'Input Due Date',
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
        key: 'paymentAmount',
        label: 'Payment Amount',
        type: 'select',
        placeholder: 'Input Payment Amount',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      
    ]
  };
}

export interface IPaymentSchedule {
  id: FieldValue;
  paymentTerm: FieldValue;
  description: FieldValue;
  dueDate: FieldValue;
  invoicePortion: FieldValue;
  paymentAmount: FieldValue;
  modeOfPayment: FieldValue;
  
}
