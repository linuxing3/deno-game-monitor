// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobApplicantSource
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobApplicantSources
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class JobApplicantSource extends Model { 
  static table = "jobApplicantSources";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    sourceName: DataTypes.STRING,
    details: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'sourceName',
        label: 'Source Name',
        type: 'input',
        placeholder: 'Input Source Name',
        options: '',
        
      },
      {
        key: 'details',
        label: 'Details',
        type: 'input',
        placeholder: 'Input Details',
        options: '',
        
      },
      
    ]
  };
}
