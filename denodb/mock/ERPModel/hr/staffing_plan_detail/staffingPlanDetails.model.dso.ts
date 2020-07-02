// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: StaffingPlanDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of staffingPlanDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("staffingPlanDetails")
export class StaffingPlanDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  numberOfPositions!: string;
  
  @Field({ type: FieldType.STRING })
  estimatedCostPerPosition!: string;
  
  @Field({ type: FieldType.STRING })
  currentCount!: string;
  
  @Field({ type: FieldType.STRING })
  currentOpenings!: string;
  
  @Field({ type: FieldType.STRING })
  vacancies!: string;
  
  @Field({ type: FieldType.STRING })
  totalEstimatedCost!: string;
  
  
}

export interface IStaffingPlanDetail {
  id: number;
  designation: string;
  numberOfPositions: string;
  estimatedCostPerPosition: string;
  currentCount: string;
  currentOpenings: string;
  vacancies: string;
  totalEstimatedCost: string;
  
}
