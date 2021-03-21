// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMovement
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMovements
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AssetMovement extends Model { 
  static table = "assetMovements";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    purpose: DataTypes.STRING,
    asset: DataTypes.STRING,
    transactionDate: DataTypes.STRING,
    quantity: DataTypes.STRING,
    selectSerialNo: DataTypes.STRING,
    serialNo: DataTypes.STRING,
    sourceLocation: DataTypes.STRING,
    targetLocation: DataTypes.STRING,
    fromEmployee: DataTypes.STRING,
    toEmployee: DataTypes.STRING,
    reference: DataTypes.STRING,
    referenceDocType: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
