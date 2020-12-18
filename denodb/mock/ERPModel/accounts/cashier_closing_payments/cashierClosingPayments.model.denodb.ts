// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosingPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashierClosingPayments
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


export class CashierClosingPayment extends Model { 
  static table = "cashierClosingPayments";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    modeOfPayment: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'select',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      
    ]
  };
}

export interface ICashierClosingPayment {
  id: FieldValue;
  modeOfPayment: FieldValue;
  amount: FieldValue;
  
}
