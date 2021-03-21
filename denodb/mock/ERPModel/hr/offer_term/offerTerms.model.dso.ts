// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OfferTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of offerTerms
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("offerTerms")
export class OfferTerm extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  offerTerm!: string;
  
  
}

export interface IOfferTerm {
  id: number;
  offerTerm: string;
  
}
