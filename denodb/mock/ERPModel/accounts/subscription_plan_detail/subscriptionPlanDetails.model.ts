// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionPlanDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionPlanDetails
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


export class SubscriptionPlanDetail extends Model { 
  static table = "subscriptionPlanDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    quantity: DataTypes.STRING,
    plan: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'quantity',
        label: 'Quantity',
        type: 'input',
        placeholder: 'Input Quantity',
        options: '',
        
      },
      {
        key: 'plan',
        label: 'Plan',
        type: 'select',
        placeholder: 'Input Plan',
        options: '',
        
      },
      
    ]
  };
}

export interface ISubscriptionPlanDetail {
  id: FieldValue;
  quantity: FieldValue;
  plan: FieldValue;
  
}
