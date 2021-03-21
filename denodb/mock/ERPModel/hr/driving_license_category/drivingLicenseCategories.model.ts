// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DrivingLicenseCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of drivingLicenseCategories
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


export class DrivingLicenseCategory extends Model { 
  static table = "drivingLicenseCategories";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    class: DataTypes.STRING,
    description: DataTypes.STRING,
    issuingDate: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'class',
        label: 'Class',
        type: 'input',
        placeholder: 'Input Class',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'issuingDate',
        label: 'Issuing Date',
        type: 'input',
        placeholder: 'Input Issuing Date',
        options: '',
        
      },
      {
        key: 'expiryDate',
        label: 'Expiry Date',
        type: 'input',
        placeholder: 'Input Expiry Date',
        options: '',
        
      },
      
    ]
  };
}

export interface IDrivingLicenseCategory {
  id: FieldValue;
  class: FieldValue;
  description: FieldValue;
  issuingDate: FieldValue;
  expiryDate: FieldValue;
  
}
