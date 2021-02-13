// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MonthlyDistributionPercentage
|--------------------------------------------------------------------------
|
| Model Class and Interface of monthlyDistributionPercentages
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("monthlyDistributionPercentages")
export class MonthlyDistributionPercentage extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  month!: string;
  
  @Field({ type: FieldType.STRING })
  percentageAllocation!: string;
  
  
}

export interface IMonthlyDistributionPercentage {
  id: number;
  month: string;
  percentageAllocation: string;
  
}
