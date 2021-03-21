// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftAssignment
|--------------------------------------------------------------------------
|
| Model Class and Interface of shiftAssignments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShiftAssignment extends Model { 
  static table = "shiftAssignments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    shiftType: DataTypes.STRING,
    present: DataTypes.STRING,
    company: DataTypes.STRING,
    date: DataTypes.STRING,
    shiftRequest: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
