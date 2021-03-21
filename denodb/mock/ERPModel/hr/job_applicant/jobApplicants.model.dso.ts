// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobApplicant
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobApplicants
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("jobApplicants")
export class JobApplicant extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  applicantName!: string;
  
  @Field({ type: FieldType.STRING })
  emailAddress!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  jobOpening!: string;
  
  @Field({ type: FieldType.STRING })
  source!: string;
  
  @Field({ type: FieldType.STRING })
  sourceName!: string;
  
  @Field({ type: FieldType.STRING })
  coverLetter!: string;
  
  @Field({ type: FieldType.STRING })
  resumeAttachment!: string;
  
  
}

export interface IJobApplicant {
  id: number;
  applicantName: string;
  emailAddress: string;
  status: string;
  jobOpening: string;
  source: string;
  sourceName: string;
  coverLetter: string;
  resumeAttachment: string;
  
}
