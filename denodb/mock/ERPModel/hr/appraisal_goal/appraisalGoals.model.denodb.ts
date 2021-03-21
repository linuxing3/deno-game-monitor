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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class AppraisalGoal extends Model { 
  static table = "appraisalGoals";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    goal: DataTypes.STRING,
    weightage: DataTypes.STRING,
    score_0_5: DataTypes.STRING,
    scoreEarned: DataTypes.STRING,
    
  };

}
