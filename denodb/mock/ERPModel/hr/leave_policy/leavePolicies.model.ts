// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeavePolicy
|--------------------------------------------------------------------------
|
| Model Class and Interface of leavePolicies
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


export class LeavePolicy extends Model { 
  static table = "leavePolicies";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveAllocations: DataTypes.STRING,
    leavePolicyDetails: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'leaveAllocations',
        label: 'Leave Allocations',
        type: 'input',
        placeholder: 'Input Leave Allocations',
        options: '',
        
      },
      {
        key: 'leavePolicyDetails',
        label: 'Leave Policy Details',
        type: 'select',
        placeholder: 'Input Leave Policy Details',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}

export interface ILeavePolicy {
  id: FieldValue;
  leaveAllocations: FieldValue;
  leavePolicyDetails: FieldValue;
  amendedFrom: FieldValue;
  
}
