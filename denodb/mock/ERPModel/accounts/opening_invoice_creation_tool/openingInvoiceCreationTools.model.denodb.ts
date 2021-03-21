// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationTool
|--------------------------------------------------------------------------
|
| Model Class and Interface of openingInvoiceCreationTools
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class OpeningInvoiceCreationTool extends Model { 
  static table = "openingInvoiceCreationTools";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    createMissingParty: DataTypes.STRING,
    invoiceType: DataTypes.STRING,
    invoices: DataTypes.STRING,
    
  };

}
