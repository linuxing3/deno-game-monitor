// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: StaffingPlanDetail
|--------------------------------------------------------------------------
|
| Model of staffingPlanDetails
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'designation',
        label: 'Designation',
        type: 'select',
        placeholder: 'Input Designation',
        options: '',
        
      },
      {
        key: 'numberOfPositions',
        label: 'Number Of Positions',
        type: 'input',
        placeholder: 'Input Number Of Positions',
        options: '',
        
      },
      {
        key: 'estimatedCostPerPosition',
        label: 'Estimated Cost Per Position',
        type: 'input',
        placeholder: 'Input Estimated Cost Per Position',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'currentCount',
        label: 'Current Count',
        type: 'input',
        placeholder: 'Input Current Count',
        options: '',
        
      },
      {
        key: 'currentOpenings',
        label: 'Current Openings',
        type: 'input',
        placeholder: 'Input Current Openings',
        options: '',
        
      },
      {
        key: 'vacancies',
        label: 'Vacancies',
        type: 'input',
        placeholder: 'Input Vacancies',
        options: '',
        
      },
      {
        key: 'totalEstimatedCost',
        label: 'Total Estimated Cost',
        type: 'input',
        placeholder: 'Input Total Estimated Cost',
        options: '',
        
      },
      
    ]
  };
} 
