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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JobOpening extends Model { 
  static table = "jobOpenings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    jobTitle: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    designation: DataTypes.STRING,
    department: DataTypes.STRING,
    staffingPlan: DataTypes.STRING,
    plannedNumberOfPositions: DataTypes.STRING,
    publishOnWebsite: DataTypes.STRING,
    route: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
