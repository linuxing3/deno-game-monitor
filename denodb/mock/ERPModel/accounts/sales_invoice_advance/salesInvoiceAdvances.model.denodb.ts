// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoiceAdvances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesInvoiceAdvance extends Model { 
  static table = "salesInvoiceAdvances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    referenceType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    remarks: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    advanceAmount: DataTypes.STRING,
    allocatedAmount: DataTypes.STRING,
    
  };

}
