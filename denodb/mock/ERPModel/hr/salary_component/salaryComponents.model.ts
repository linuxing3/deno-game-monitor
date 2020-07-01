// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryComponent
|--------------------------------------------------------------------------
|
| Model of salaryComponents
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SalaryComponent extends Model { 
  static table = "salaryComponents";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    abbr: DataTypes.STRING,
    type: DataTypes.STRING,
    isAdditionalComponent: DataTypes.STRING,
    isTaxApplicable: DataTypes.STRING,
    isPayable: DataTypes.STRING,
    dependsOnLeaveWithoutPay: DataTypes.STRING,
    doNotIncludeInTotal: DataTypes.STRING,
    disabled: DataTypes.STRING,
    description: DataTypes.STRING,
    statisticalComponent: DataTypes.STRING,
    flexibleBenefits: DataTypes.STRING,
    isFlexibleBenefit: DataTypes.STRING,
    maxBenefitAmountYearly: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    onlyTaxImpactCannotClaimButPartOfTaxableIncome: DataTypes.STRING,
    createSeparatePaymentEntryAgainstBenefitClaim: DataTypes.STRING,
    variableBasedOnTaxableSalary: DataTypes.STRING,
    accounts: DataTypes.STRING,
    accounts: DataTypes.STRING,
    conditionAndFormula: DataTypes.STRING,
    condition: DataTypes.STRING,
    amountBasedOnFormula: DataTypes.STRING,
    formula: DataTypes.STRING,
    amount: DataTypes.STRING,
    help: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'name',
      
        label: 'Name',
      
        type: 'input',
      
        placeholder: 'Input Name',
      
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
        
        key: 'type',
      
        label: 'Type',
      
        type: 'select',
      
        placeholder: 'Input Type',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'isAdditionalComponent',
      
        label: 'Is Additional Component',
      
        type: 'input',
      
        placeholder: 'Input Is Additional Component',
      
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
        
        key: 'isPayable',
      
        label: 'Is Payable',
      
        type: 'input',
      
        placeholder: 'Input Is Payable',
      
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
        
        key: 'doNotIncludeInTotal',
      
        label: 'Do Not Include In Total',
      
        type: 'input',
      
        placeholder: 'Input Do Not Include In Total',
      
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
        
        key: 'disabled',
      
        label: 'Disabled',
      
        type: 'input',
      
        placeholder: 'Input Disabled',
      
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
        
        key: 'statisticalComponent',
      
        label: 'Statistical Component',
      
        type: 'input',
      
        placeholder: 'Input Statistical Component',
      
        options: '',
      
      },
      {
        
        key: 'flexibleBenefits',
      
        label: 'Flexible Benefits',
      
        type: 'input',
      
        placeholder: 'Input Flexible Benefits',
      
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
        
        key: 'maxBenefitAmountYearly',
      
        label: 'Max Benefit Amount Yearly',
      
        type: 'input',
      
        placeholder: 'Input Max Benefit Amount Yearly',
      
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
        
        key: 'payAgainstBenefitClaim',
      
        label: 'Pay Against Benefit Claim',
      
        type: 'input',
      
        placeholder: 'Input Pay Against Benefit Claim',
      
        options: '',
      
      },
      {
        
        key: 'onlyTaxImpactCannotClaimButPartOfTaxableIncome',
      
        label: 'Only Tax Impact Cannot Claim But Part Of Taxable Income',
      
        type: 'input',
      
        placeholder: 'Input Only Tax Impact Cannot Claim But Part Of Taxable Income',
      
        options: '',
      
      },
      {
        
        key: 'createSeparatePaymentEntryAgainstBenefitClaim',
      
        label: 'Create Separate Payment Entry Against Benefit Claim',
      
        type: 'input',
      
        placeholder: 'Input Create Separate Payment Entry Against Benefit Claim',
      
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
        
        key: 'variableBasedOnTaxableSalary',
      
        label: 'Variable Based On Taxable Salary',
      
        type: 'input',
      
        placeholder: 'Input Variable Based On Taxable Salary',
      
        options: '',
      
      },
      {
        
        key: 'accounts',
      
        label: 'Accounts',
      
        type: 'input',
      
        placeholder: 'Input Accounts',
      
        options: '',
      
      },
      {
        
        key: 'accounts',
      
        label: 'Accounts',
      
        type: 'select',
      
        placeholder: 'Input Accounts',
      
        options: '',
      
      },
      {
        
        key: 'conditionAndFormula',
      
        label: 'Condition And Formula',
      
        type: 'input',
      
        placeholder: 'Input Condition And Formula',
      
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
      
        type: 'input',
      
        placeholder: 'Input Amount',
      
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
        
        key: 'help',
      
        label: 'Help',
      
        type: 'select',
      
        placeholder: 'Input Help',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      
      },
      
    ]
  };
} 
