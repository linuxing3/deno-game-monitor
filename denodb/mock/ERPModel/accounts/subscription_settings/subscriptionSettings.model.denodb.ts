// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptionSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class SubscriptionSetting extends Model { 
  static table = "subscriptionSettings";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    gracePeriod: DataTypes.STRING,
    cancelInvoiceAfterGracePeriod: DataTypes.STRING,
    prorate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'gracePeriod',
        label: 'Grace Period',
        type: 'input',
        placeholder: 'Input Grace Period',
        options: '',
        
      },
      {
        key: 'cancelInvoiceAfterGracePeriod',
        label: 'Cancel Invoice After Grace Period',
        type: 'input',
        placeholder: 'Input Cancel Invoice After Grace Period',
        options: '',
        
      },
      {
        key: 'prorate',
        label: 'Prorate',
        type: 'input',
        placeholder: 'Input Prorate',
        options: '',
        
      },
      
    ]
  };
}
