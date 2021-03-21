// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ChequePrintTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of chequePrintTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ChequePrintTemplate extends Model { 
  static table = "chequePrintTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    hasPrintFormat: DataTypes.STRING,
    primarySettings: DataTypes.STRING,
    bankName: DataTypes.STRING,
    chequeSize: DataTypes.STRING,
    chequeWidth: DataTypes.STRING,
    chequeHeight: DataTypes.STRING,
    scannedCheque: DataTypes.STRING,
    isAccountPayable: DataTypes.STRING,
    distanceFromLeftEdge: DataTypes.STRING,
    messageToShow: DataTypes.STRING,
    dateSettings: DataTypes.STRING,
    payerSettings: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    widthOfAmountInWord: DataTypes.STRING,
    lineSpacingForAmountInWords: DataTypes.STRING,
    amountInFigure: DataTypes.STRING,
    signatoryPosition: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    preview: DataTypes.STRING,
    
  };

}
