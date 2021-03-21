// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTermsTemplateDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PaymentTermsTemplateDetail extends Model { 
  static table = "paymentTermsTemplateDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentTerm: DataTypes.STRING,
    description: DataTypes.STRING,
    invoicePortion: DataTypes.STRING,
    dueDateBasedOn: DataTypes.STRING,
    creditDays: DataTypes.STRING,
    creditMonths: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    
  };

}
