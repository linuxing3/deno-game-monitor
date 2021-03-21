// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingProgram
|--------------------------------------------------------------------------
|
| Model Class and Interface of trainingPrograms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class TrainingProgram extends Model { 
  static table = "trainingPrograms";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    trainingProgram: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    trainerEmail: DataTypes.STRING,
    supplier: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'trainingProgram',
        label: 'Training Program',
        type: 'input',
        placeholder: 'Input Training Program',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'trainerName',
        label: 'Trainer Name',
        type: 'input',
        placeholder: 'Input Trainer Name',
        options: '',
        
      },
      {
        key: 'trainerEmail',
        label: 'Trainer Email',
        type: 'input',
        placeholder: 'Input Trainer Email',
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
        key: 'supplier',
        label: 'Supplier',
        type: 'select',
        placeholder: 'Input Supplier',
        options: '',
        
      },
      {
        key: 'contactNumber',
        label: 'Contact Number',
        type: 'input',
        placeholder: 'Input Contact Number',
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}
