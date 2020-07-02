// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOpening
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOpenings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("jobOpenings")
export class JobOpening extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  jobTitle!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  staffingPlan!: string;
  
  @Field({ type: FieldType.STRING })
  plannedNumberOfPositions!: string;
  
  @Field({ type: FieldType.STRING })
  publishOnWebsite!: string;
  
  @Field({ type: FieldType.STRING })
  route!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IJobOpening {
  id: number;
  jobTitle: string;
  company: string;
  status: string;
  designation: string;
  department: string;
  staffingPlan: string;
  plannedNumberOfPositions: string;
  publishOnWebsite: string;
  route: string;
  description: string;
  
}
