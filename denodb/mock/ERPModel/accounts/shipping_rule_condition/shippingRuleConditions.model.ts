// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCondition
|--------------------------------------------------------------------------
|
| Model of shippingRuleConditions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ShippingRuleCondition extends Model { 
  static table = "shippingRuleConditions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    fromValue: DataTypes.STRING,
    toValue: DataTypes.STRING,
    shippingAmount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'fromValue',
        label: 'From Value',
        type: 'input',
        placeholder: 'Input From Value',
        options: '',
        
      },
      {
        key: 'toValue',
        label: 'To Value',
        type: 'input',
        placeholder: 'Input To Value',
        options: '',
        
      },
      {
        key: 'shippingAmount',
        label: 'Shipping Amount',
        type: 'select',
        placeholder: 'Input Shipping Amount',
        options: '',
        
      },
      
    ]
  };
} 
