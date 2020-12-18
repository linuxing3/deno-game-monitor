// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOfferTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOfferTerms
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


export class JobOfferTerm extends Model { 
  static table = "jobOfferTerms";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    offerTerm: DataTypes.STRING,
    valueDescription: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'offerTerm',
        label: 'Offer Term',
        type: 'select',
        placeholder: 'Input Offer Term',
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
        key: 'valueDescription',
        label: 'Value Description',
        type: 'input',
        placeholder: 'Input Value Description',
        options: '',
        
      },
      
    ]
  };
}

export interface IJobOfferTerm {
  id: FieldValue;
  offerTerm: FieldValue;
  valueDescription: FieldValue;
  
}
