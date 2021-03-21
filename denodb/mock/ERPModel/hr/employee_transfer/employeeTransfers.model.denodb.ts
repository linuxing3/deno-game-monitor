// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTransfer
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTransfers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTransfer extends Model { 
  static table = "employeeTransfers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    transferDate: DataTypes.STRING,
    company: DataTypes.STRING,
    newCompany: DataTypes.STRING,
    department: DataTypes.STRING,
    employeeTransferDetails: DataTypes.STRING,
    employeeTransferDetail: DataTypes.STRING,
    reAllocateLeaves: DataTypes.STRING,
    createNewEmployeeId: DataTypes.STRING,
    newEmployeeId: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
