// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Shareholder
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareholders
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Shareholder extends Model { 
  static table = "shareholders";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    folioNo: DataTypes.STRING,
    company: DataTypes.STRING,
    isCompany: DataTypes.STRING,
    addressAndContacts: DataTypes.STRING,
    addressHtml: DataTypes.STRING,
    contactHtml: DataTypes.STRING,
    shareBalance: DataTypes.STRING,
    contactList: DataTypes.STRING,
    
  };

}
