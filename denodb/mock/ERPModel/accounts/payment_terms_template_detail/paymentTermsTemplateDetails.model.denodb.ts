// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTermsTemplateDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PaymentTermsTemplateDetail extends Model { 
  static table = "paymentTermsTemplateDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTerm: DataTypes.STRING,
    description: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    dueDateBasedOn: DataTypes.STRING,
    creditDays: DataTypes.STRING,
    creditMonths: DataTypes.STRING,
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
        key: 'invoicePortion',
        label: 'Invoice Portion',
        type: 'input',
        placeholder: 'Input Invoice Portion',
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
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      
    ]
  };
}
