// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Department
|--------------------------------------------------------------------------
|
| Model Class and Interface of departments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Department extends Model { 
  static table = "departments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    department: DataTypes.STRING,
    parentDepartment: DataTypes.STRING,
    company: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    disabled: DataTypes.STRING,
    leaveBlockList: DataTypes.STRING,
    leaveApprovers: DataTypes.STRING,
    leaveApprover: DataTypes.STRING,
    expenseApprovers: DataTypes.STRING,
    expenseApprover: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

}
