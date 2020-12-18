// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntryRedemption
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPointEntryRedemptions
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


export class LoyaltyPointEntryRedemption extends Model { 
  static table = "loyaltyPointEntryRedemptions";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    salesInvoice: DataTypes.STRING,
    redemptionDate: DataTypes.STRING,
    redeemedPoints: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'salesInvoice',
        label: 'Sales Invoice',
        type: 'input',
        placeholder: 'Input Sales Invoice',
        options: '',
        
      },
      {
        key: 'redemptionDate',
        label: 'Redemption Date',
        type: 'input',
        placeholder: 'Input Redemption Date',
        options: '',
        
      },
      {
        key: 'redeemedPoints',
        label: 'Redeemed Points',
        type: 'input',
        placeholder: 'Input Redeemed Points',
        options: '',
        
      },
      
    ]
  };
}

export interface ILoyaltyPointEntryRedemption {
  id: FieldValue;
  salesInvoice: FieldValue;
  redemptionDate: FieldValue;
  redeemedPoints: FieldValue;
  
}
