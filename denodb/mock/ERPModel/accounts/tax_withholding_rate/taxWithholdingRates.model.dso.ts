// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxWithholdingRate
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxWithholdingRates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("taxWithholdingRates")
export class TaxWithholdingRate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  fiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  taxWithholdingRate!: string;
  
  @Field({ type: FieldType.STRING })
  singleTransactionThreshold!: string;
  
  @Field({ type: FieldType.STRING })
  cumulativeTransactionThreshold!: string;
  
  
}

export interface ITaxWithholdingRate {
  id: number;
  fiscalYear: string;
  taxWithholdingRate: string;
  singleTransactionThreshold: string;
  cumulativeTransactionThreshold: string;
  
}
