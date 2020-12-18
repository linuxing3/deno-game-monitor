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
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class AppraisalGoal extends Model { 
  static table = "appraisalGoals";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    goal: DataTypes.STRING,
    weightage: DataTypes.STRING,
    score_0_5: DataTypes.STRING,
    scoreEarned: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'goal',
        label: 'Goal',
        type: 'input',
        placeholder: 'Input Goal',
        options: '',
        
      },
      {
        key: 'weightage',
        label: 'Weightage',
        type: 'input',
        placeholder: 'Input Weightage',
        options: '',
        
      },
      {
        key: 'score_0_5',
        label: 'Score 0 5',
        type: 'input',
        placeholder: 'Input Score 0 5',
        options: '',
        
      },
      {
        key: 'scoreEarned',
        label: 'Score Earned',
        type: 'input',
        placeholder: 'Input Score Earned',
        options: '',
        
      },
      
    ]
  };
}

export interface IAppraisalGoal {
  id: FieldValue;
  goal: FieldValue;
  weightage: FieldValue;
  score_0_5: FieldValue;
  scoreEarned: FieldValue;
  
}
