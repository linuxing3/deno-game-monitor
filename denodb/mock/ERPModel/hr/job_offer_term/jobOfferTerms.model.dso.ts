// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOfferTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOfferTerms
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("jobOfferTerms")
export class JobOfferTerm extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  offerTerm!: string;
  
  @Field({ type: FieldType.STRING })
  valueDescription!: string;
  
  
}

export interface IJobOfferTerm {
  id: number;
  offerTerm: string;
  valueDescription: string;
  
}
