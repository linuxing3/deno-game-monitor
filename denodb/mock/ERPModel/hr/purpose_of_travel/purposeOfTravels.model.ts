// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurposeOfTravel
|--------------------------------------------------------------------------
|
| Model Class and Interface of purposeOfTravels
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


export class PurposeOfTravel extends Model { 
  static table = "purposeOfTravels";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    purposeOfTravel: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'purposeOfTravel',
        label: 'Purpose Of Travel',
        type: 'input',
        placeholder: 'Input Purpose Of Travel',
        options: '',
        
      },
      
    ]
  };
}

export interface IPurposeOfTravel {
  id: FieldValue;
  purposeOfTravel: FieldValue;
  
}
