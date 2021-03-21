// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBoardingActivity
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBoardingActivities
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employeeBoardingActivities")
export class EmployeeBoardingActivity extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  activityName!: string;
  
  @Field({ type: FieldType.STRING })
  user!: string;
  
  @Field({ type: FieldType.STRING })
  role!: string;
  
  @Field({ type: FieldType.STRING })
  task!: string;
  
  @Field({ type: FieldType.STRING })
  requiredForEmployeeCreation!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IEmployeeBoardingActivity {
  id: number;
  activityName: string;
  user: string;
  role: string;
  task: string;
  requiredForEmployeeCreation: string;
  description: string;
  
}
