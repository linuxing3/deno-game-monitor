// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntryRedemption
|--------------------------------------------------------------------------
|
| Model of loyaltyPointEntryRedemptions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LoyaltyPointEntryRedemption extends Model { 
  static table = "loyaltyPointEntryRedemptions";
  static timestamps = true;
  
  static fields = {
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
      },{
        key: 'redemptionDate',
      
        label: 'Redemption Date',
      
        type: 'input',
      
        placeholder: 'Input Redemption Date',
      
        options: '',
      },{
        key: 'redeemedPoints',
      
        label: 'Redeemed Points',
      
        type: 'input',
      
        placeholder: 'Input Redeemed Points',
      
        options: '',
      },
    ]
  };
} 
