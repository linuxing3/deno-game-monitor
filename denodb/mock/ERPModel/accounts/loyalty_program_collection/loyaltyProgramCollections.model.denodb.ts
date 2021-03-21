// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyProgramCollection
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyProgramCollections
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LoyaltyProgramCollection extends Model { 
  static table = "loyaltyProgramCollections";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    tierName: DataTypes.STRING,
    minimumTotalSpent: DataTypes.STRING,
    collectionFactor_1Lp: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'tierName',
        label: 'Tier Name',
        type: 'input',
        placeholder: 'Input Tier Name',
        options: '',
        
      },
      {
        key: 'minimumTotalSpent',
        label: 'Minimum Total Spent',
        type: 'input',
        placeholder: 'Input Minimum Total Spent',
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
        key: 'collectionFactor_1Lp',
        label: 'Collection Factor 1 Lp',
        type: 'input',
        placeholder: 'Input Collection Factor 1 Lp',
        options: '',
        
      },
      
    ]
  };
}
