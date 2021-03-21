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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JobApplicant extends Model { 
  static table = "jobApplicants";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    applicantName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    status: DataTypes.STRING,
    jobOpening: DataTypes.STRING,
    source: DataTypes.STRING,
    sourceName: DataTypes.STRING,
    coverLetter: DataTypes.STRING,
    resumeAttachment: DataTypes.STRING,
    
  };

}
