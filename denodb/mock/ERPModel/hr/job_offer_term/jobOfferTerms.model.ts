// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOfferTerm
|--------------------------------------------------------------------------
|
| Model of jobOfferTerms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class JobOfferTerm extends Model { 
  static table = "jobOfferTerms";
  static timestamps = true;
  
  static fields = {
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
