// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentGatewayAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentGatewayAccounts
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


export class PaymentGatewayAccount extends Model { 
  static table = "paymentGatewayAccounts";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentGateway: DataTypes.STRING,
    isDefault: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    currency: DataTypes.STRING,
    defaultPaymentRequestMessage: DataTypes.STRING,
    messageExamples: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'paymentGateway',
        label: 'Payment Gateway',
        type: 'select',
        placeholder: 'Input Payment Gateway',
        options: '',
        
      },
      {
        key: 'isDefault',
        label: 'Is Default',
        type: 'input',
        placeholder: 'Input Is Default',
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
        key: 'paymentAccount',
        label: 'Payment Account',
        type: 'select',
        placeholder: 'Input Payment Account',
        options: '',
        
      },
      {
        key: 'currency',
        label: 'Currency',
        type: 'input',
        placeholder: 'Input Currency',
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
        key: 'defaultPaymentRequestMessage',
        label: 'Default Payment Request Message',
        type: 'input',
        placeholder: 'Input Default Payment Request Message',
        options: '',
        
      },
      {
        key: 'messageExamples',
        label: 'Message Examples',
        type: 'select',
        placeholder: 'Input Message Examples',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      
    ]
  };
}

export interface IPaymentGatewayAccount {
  id: FieldValue;
  paymentGateway: FieldValue;
  isDefault: FieldValue;
  paymentAccount: FieldValue;
  currency: FieldValue;
  defaultPaymentRequestMessage: FieldValue;
  messageExamples: FieldValue;
  
}
