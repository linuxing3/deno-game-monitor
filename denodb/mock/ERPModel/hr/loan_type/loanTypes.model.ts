// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanType
|--------------------------------------------------------------------------
|
| Model of loanTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LoanType extends Model { 
  static table = "loanTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    loanName: DataTypes.STRING,
    
    maximumLoanAmount: DataTypes.STRING,
    
    rateOfInterestYearly: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    disabled: DataTypes.STRING,
    
    description: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'loanName',
      
        label: 'Loan Name',
      
        type: 'input',
      
        placeholder: 'Input Loan Name',
      
        options: '',
      },{
        key: 'maximumLoanAmount',
      
        label: 'Maximum Loan Amount',
      
        type: 'select',
      
        placeholder: 'Input Maximum Loan Amount',
      
        options: '',
      },{
        key: 'rateOfInterestYearly',
      
        label: 'Rate Of Interest Yearly',
      
        type: 'input',
      
        placeholder: 'Input Rate Of Interest Yearly',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'disabled',
      
        label: 'Disabled',
      
        type: 'input',
      
        placeholder: 'Input Disabled',
      
        options: '',
      },{
        key: 'description',
      
        label: 'Description',
      
        type: 'input',
      
        placeholder: 'Input Description',
      
        options: '',
      },
    ]
  };
} 
