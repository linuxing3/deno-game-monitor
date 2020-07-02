// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCountry
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRuleCountries
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


export class ShippingRuleCountry extends Model { 
  static table = "shippingRuleCountries";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    country: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'country',
        label: 'Country',
        type: 'select',
        placeholder: 'Input Country',
        options: '',
        
      },
      
    ]
  };
}

export interface IShippingRuleCountry {
  id: FieldValue;
  country: FieldValue;
  
}
