// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: MonthlyDistribution
|--------------------------------------------------------------------------
|
| Model Class and Interface of monthlyDistributions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("monthlyDistributions")
export class MonthlyDistribution extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  distributionName!: string;
  
  @Field({ type: FieldType.STRING })
  fiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  monthlyDistributionPercentages!: string;
  
  
}

export interface IMonthlyDistribution {
  id: number;
  distributionName: string;
  fiscalYear: string;
  monthlyDistributionPercentages: string;
  
}
