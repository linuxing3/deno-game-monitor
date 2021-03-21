// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryDetails
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


export class SalaryDetail extends Model { 
  static table = "salaryDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    component: DataTypes.STRING,
    abbr: DataTypes.STRING,
    statisticalComponent: DataTypes.STRING,
    isTaxApplicable: DataTypes.STRING,
    isFlexibleBenefit: DataTypes.STRING,
    isAdditionalComponent: DataTypes.STRING,
    variableBasedOnTaxableSalary: DataTypes.STRING,
    dependsOnLeaveWithoutPay: DataTypes.STRING,
    condition: DataTypes.STRING,
    amountBasedOnFormula: DataTypes.STRING,
    formula: DataTypes.STRING,
    amount: DataTypes.STRING,
    doNotIncludeInTotal: DataTypes.STRING,
    defaultAmount: DataTypes.STRING,
    taxOnFlexibleBenefit: DataTypes.STRING,
    taxOnAdditionalSalary: DataTypes.STRING,
    conditionAndFormulaHelp: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'component',
        label: 'Component',
        type: 'select',
        placeholder: 'Input Component',
        options: '',
        
      },
      {
        key: 'abbr',
        label: 'Abbr',
        type: 'input',
        placeholder: 'Input Abbr',
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
        key: 'statisticalComponent',
        label: 'Statistical Component',
        type: 'input',
        placeholder: 'Input Statistical Component',
        options: '',
        
      },
      {
        key: 'isTaxApplicable',
        label: 'Is Tax Applicable',
        type: 'input',
        placeholder: 'Input Is Tax Applicable',
        options: '',
        
      },
      {
        key: 'isFlexibleBenefit',
        label: 'Is Flexible Benefit',
        type: 'input',
        placeholder: 'Input Is Flexible Benefit',
        options: '',
        
      },
      {
        key: 'isAdditionalComponent',
        label: 'Is Additional Component',
        type: 'input',
        placeholder: 'Input Is Additional Component',
        options: '',
        
      },
      {
        key: 'variableBasedOnTaxableSalary',
        label: 'Variable Based On Taxable Salary',
        type: 'input',
        placeholder: 'Input Variable Based On Taxable Salary',
        options: '',
        
      },
      {
        key: 'dependsOnLeaveWithoutPay',
        label: 'Depends On Leave Without Pay',
        type: 'input',
        placeholder: 'Input Depends On Leave Without Pay',
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
        key: 'condition',
        label: 'Condition',
        type: 'input',
        placeholder: 'Input Condition',
        options: '',
        
      },
      {
        key: 'amountBasedOnFormula',
        label: 'Amount Based On Formula',
        type: 'input',
        placeholder: 'Input Amount Based On Formula',
        options: '',
        
      },
      {
        key: 'formula',
        label: 'Formula',
        type: 'input',
        placeholder: 'Input Formula',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'select',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'doNotIncludeInTotal',
        label: 'Do Not Include In Total',
        type: 'input',
        placeholder: 'Input Do Not Include In Total',
        options: '',
        
      },
      {
        key: 'defaultAmount',
        label: 'Default Amount',
        type: 'select',
        placeholder: 'Input Default Amount',
        options: '',
        
      },
      {
        key: 'taxOnFlexibleBenefit',
        label: 'Tax On Flexible Benefit',
        type: 'input',
        placeholder: 'Input Tax On Flexible Benefit',
        options: '',
        
      },
      {
        key: 'taxOnAdditionalSalary',
        label: 'Tax On Additional Salary',
        type: 'input',
        placeholder: 'Input Tax On Additional Salary',
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
        key: 'conditionAndFormulaHelp',
        label: 'Condition And Formula Help',
        type: 'select',
        placeholder: 'Input Condition And Formula Help',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      
    ]
  };
}

export interface ISalaryDetail {
  id: FieldValue;
  component: FieldValue;
  abbr: FieldValue;
  statisticalComponent: FieldValue;
  isTaxApplicable: FieldValue;
  isFlexibleBenefit: FieldValue;
  isAdditionalComponent: FieldValue;
  variableBasedOnTaxableSalary: FieldValue;
  dependsOnLeaveWithoutPay: FieldValue;
  condition: FieldValue;
  amountBasedOnFormula: FieldValue;
  formula: FieldValue;
  amount: FieldValue;
  doNotIncludeInTotal: FieldValue;
  defaultAmount: FieldValue;
  taxOnFlexibleBenefit: FieldValue;
  taxOnAdditionalSalary: FieldValue;
  conditionAndFormulaHelp: FieldValue;
  
}
