// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationToolItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of openingInvoiceCreationToolItems
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class OpeningInvoiceCreationToolItem extends Model { 
  static table = "openingInvoiceCreationToolItems";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    temporaryOpeningAccount: DataTypes.STRING,
    postingDate: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    itemName: DataTypes.STRING,
    outstandingAmount: DataTypes.STRING,
    quantity: DataTypes.STRING,
    
  };

}
