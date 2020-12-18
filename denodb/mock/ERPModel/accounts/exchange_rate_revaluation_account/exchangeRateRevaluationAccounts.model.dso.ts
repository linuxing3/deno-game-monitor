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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("exchangeRateRevaluationAccounts")
export class ExchangeRateRevaluationAccount extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  account!: string;
  
  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  accountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  balanceInAccountCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  currentExchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  balanceInBaseCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  newExchangeRate!: string;
  
  @Field({ type: FieldType.STRING })
  newBalanceInBaseCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  gainLoss!: string;
  
  
}

export interface IExchangeRateRevaluationAccount {
  id: number;
  account: string;
  partyType: string;
  party: string;
  accountCurrency: string;
  balanceInAccountCurrency: string;
  currentExchangeRate: string;
  balanceInBaseCurrency: string;
  newExchangeRate: string;
  newBalanceInBaseCurrency: string;
  gainLoss: string;
  
}
