// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CForm
|--------------------------------------------------------------------------
|
| Model Class and Interface of cForms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CForm extends Model { 
  static table = "cForms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    cFormNo: DataTypes.STRING,
    receivedDate: DataTypes.STRING,
    customer: DataTypes.STRING,
    company: DataTypes.STRING,
    quarter: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    state: DataTypes.STRING,
    invoices: DataTypes.STRING,
    totalInvoicedAmount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
