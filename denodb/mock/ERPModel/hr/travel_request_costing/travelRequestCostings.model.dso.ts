// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelRequestCosting
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelRequestCostings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("travelRequestCostings")
export class TravelRequestCosting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  expenseType!: string;
  
  @Field({ type: FieldType.STRING })
  sponsoredAmount!: string;
  
  @Field({ type: FieldType.STRING })
  fundedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  comments!: string;
  
  
}

export interface ITravelRequestCosting {
  id: number;
  expenseType: string;
  sponsoredAmount: string;
  fundedAmount: string;
  totalAmount: string;
  comments: string;
  
}
