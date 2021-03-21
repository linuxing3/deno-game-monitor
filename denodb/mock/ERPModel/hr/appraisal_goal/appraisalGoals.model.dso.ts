// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AppraisalGoal
|--------------------------------------------------------------------------
|
| Model Class and Interface of appraisalGoals
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("appraisalGoals")
export class AppraisalGoal extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  goal!: string;
  
  @Field({ type: FieldType.STRING })
  weightage!: string;
  
  @Field({ type: FieldType.STRING })
  score_0_5!: string;
  
  @Field({ type: FieldType.STRING })
  scoreEarned!: string;
  
  
}

export interface IAppraisalGoal {
  id: number;
  goal: string;
  weightage: string;
  score_0_5: string;
  scoreEarned: string;
  
}
