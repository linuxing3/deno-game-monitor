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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class JobApplicant extends Model { 
  static table = "jobApplicants";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'applicantName',
        label: 'Applicant Name',
        type: 'input',
        placeholder: 'Input Applicant Name',
        options: '',
        
      },
      {
        key: 'emailAddress',
        label: 'Email Address',
        type: 'select',
        placeholder: 'Input Email Address',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'jobOpening',
        label: 'Job Opening',
        type: 'select',
        placeholder: 'Input Job Opening',
        options: '',
        
      },
      {
        key: 'source',
        label: 'Source',
        type: 'select',
        placeholder: 'Input Source',
        options: '',
        
      },
      {
        key: 'sourceName',
        label: 'Source Name',
        type: 'select',
        placeholder: 'Input Source Name',
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
        key: 'coverLetter',
        label: 'Cover Letter',
        type: 'input',
        placeholder: 'Input Cover Letter',
        options: '',
        
      },
      {
        key: 'resumeAttachment',
        label: 'Resume Attachment',
        type: 'input',
        placeholder: 'Input Resume Attachment',
        options: '',
        
      },
      
    ]
  };
}
