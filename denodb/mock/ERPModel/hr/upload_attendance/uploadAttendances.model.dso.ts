// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: UploadAttendance
|--------------------------------------------------------------------------
|
| Model Class and Interface of uploadAttendances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("uploadAttendances")
export class UploadAttendance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  downloadTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  attendanceFromDate!: string;
  
  @Field({ type: FieldType.STRING })
  attendanceToDate!: string;
  
  @Field({ type: FieldType.STRING })
  getTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  importAttendance!: string;
  
  @Field({ type: FieldType.STRING })
  uploadHtml!: string;
  
  @Field({ type: FieldType.STRING })
  importLog!: string;
  
  
}

export interface IUploadAttendance {
  id: number;
  downloadTemplate: string;
  attendanceFromDate: string;
  attendanceToDate: string;
  getTemplate: string;
  importAttendance: string;
  uploadHtml: string;
  importLog: string;
  
}
