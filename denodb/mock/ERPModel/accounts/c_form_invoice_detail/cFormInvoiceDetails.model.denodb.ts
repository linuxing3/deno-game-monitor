// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CFormInvoiceDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of cFormInvoiceDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CFormInvoiceDetail extends Model { 
  static table = "cFormInvoiceDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    invoiceNo: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    territory: DataTypes.STRING,
    netTotal: DataTypes.STRING,
    grandTotal: DataTypes.STRING,
    
  };

}
