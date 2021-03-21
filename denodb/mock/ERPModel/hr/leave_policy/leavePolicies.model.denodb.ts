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


export class LeavePolicy extends Model { 
  static table = "leavePolicies";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveAllocations: DataTypes.STRING,
    leavePolicyDetails: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
