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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class StaffingPlanDetail extends Model { 
  static table = "staffingPlanDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    designation: DataTypes.STRING,
    numberOfPositions: DataTypes.STRING,
    estimatedCostPerPosition: DataTypes.STRING,
    currentCount: DataTypes.STRING,
    currentOpenings: DataTypes.STRING,
    vacancies: DataTypes.STRING,
    totalEstimatedCost: DataTypes.STRING,
    
  };

}
