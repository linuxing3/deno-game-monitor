// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: StaffingPlan
|--------------------------------------------------------------------------
|
| Model Class and Interface of staffingPlans
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class StaffingPlan extends Model { 
  static table = "staffingPlans";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    staffingPlanDetails: DataTypes.STRING,
    staffingPlanDetail: DataTypes.STRING,
    totalEstimatedBudget: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
