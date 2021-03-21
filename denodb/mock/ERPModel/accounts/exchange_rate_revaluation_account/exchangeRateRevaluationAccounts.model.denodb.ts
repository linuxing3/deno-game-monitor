// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExchangeRateRevaluationAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of exchangeRateRevaluationAccounts
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ExchangeRateRevaluationAccount extends Model { 
  static table = "exchangeRateRevaluationAccounts";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    account: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    balanceInAccountCurrency: DataTypes.STRING,
    currentExchangeRate: DataTypes.STRING,
    balanceInBaseCurrency: DataTypes.STRING,
    newExchangeRate: DataTypes.STRING,
    newBalanceInBaseCurrency: DataTypes.STRING,
    gainLoss: DataTypes.STRING,
    
  };

}
