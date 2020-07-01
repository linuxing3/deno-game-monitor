// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUser
|--------------------------------------------------------------------------
|
| Model of projectUsers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ProjectUser extends Model { 
  static table = "projectUsers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    user: DataTypes.STRING,
    
    email: DataTypes.STRING,
    
    image: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    fullName: DataTypes.STRING,
    
    welcomeEmailSent: DataTypes.STRING,
    
    viewAttachments: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    projectStatus: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'user',
      
        label: 'User',
      
        type: 'select',
      
        placeholder: 'Input User',
      
        options: '',
      },{
        key: 'email',
      
        label: 'Email',
      
        type: 'input',
      
        placeholder: 'Input Email',
      
        options: '',
      },{
        key: 'image',
      
        label: 'Image',
      
        type: 'input',
      
        placeholder: 'Input Image',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'fullName',
      
        label: 'Full Name',
      
        type: 'input',
      
        placeholder: 'Input Full Name',
      
        options: '',
      },{
        key: 'welcomeEmailSent',
      
        label: 'Welcome Email Sent',
      
        type: 'input',
      
        placeholder: 'Input Welcome Email Sent',
      
        options: '',
      },{
        key: 'viewAttachments',
      
        label: 'View Attachments',
      
        type: 'input',
      
        placeholder: 'Input View Attachments',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'projectStatus',
      
        label: 'Project Status',
      
        type: 'input',
      
        placeholder: 'Input Project Status',
      
        options: '',
      },
    ]
  };
} 
