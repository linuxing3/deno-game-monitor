// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePolicyDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePolicyDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LeavePolicyDetail extends Model { 
  static table = "leavePolicyDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveType: DataTypes.STRING,
    annualAllocation: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'leaveType',
        label: 'Leave Type',
        type: 'select',
        placeholder: 'Input Leave Type',
        options: '',
        
      },
      {
        key: 'annualAllocation',
        label: 'Annual Allocation',
        type: 'input',
        placeholder: 'Input Annual Allocation',
        options: '',
        
      },
      
    ]
  };
}
