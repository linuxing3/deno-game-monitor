// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareTransfer
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareTransfers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShareTransfer extends Model { 
  static table = "shareTransfers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    transferType: DataTypes.STRING,
    date: DataTypes.STRING,
    fromShareholder: DataTypes.STRING,
    fromFolioNo: DataTypes.STRING,
    equityLiabilityAccount: DataTypes.STRING,
    assetAccount: DataTypes.STRING,
    toShareholder: DataTypes.STRING,
    toFolioNo: DataTypes.STRING,
    shareType: DataTypes.STRING,
    fromNo: DataTypes.STRING,
    rate: DataTypes.STRING,
    noOfShares: DataTypes.STRING,
    toNo: DataTypes.STRING,
    amount: DataTypes.STRING,
    company: DataTypes.STRING,
    remarks: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
