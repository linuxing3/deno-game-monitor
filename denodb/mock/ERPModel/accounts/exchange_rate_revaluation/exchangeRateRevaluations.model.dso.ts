// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ExchangeRateRevaluation
|--------------------------------------------------------------------------
|
| Model Class and Interface of exchangeRateRevaluations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("exchangeRateRevaluations")
export class ExchangeRateRevaluation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  getEntries!: string;
  
  @Field({ type: FieldType.STRING })
  exchangeRateRevaluationAccount!: string;
  
  @Field({ type: FieldType.STRING })
  totalGainLoss!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IExchangeRateRevaluation {
  id: number;
  postingDate: string;
  company: string;
  getEntries: string;
  exchangeRateRevaluationAccount: string;
  totalGainLoss: string;
  amendedFrom: string;
  
}
