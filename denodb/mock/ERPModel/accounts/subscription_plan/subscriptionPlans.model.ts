// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SubscriptionPlan
|--------------------------------------------------------------------------
|
| Model of subscriptionPlans
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class SubscriptionPlan extends Model { 
  static table = "subscriptionPlans";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    planName: DataTypes.STRING,
    
    currency: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    item: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    priceDetermination: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    cost: DataTypes.STRING,
    
    priceList: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    billingInterval: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    billingIntervalCount: DataTypes.STRING,
    
    paymentPlan: DataTypes.STRING,
    
    paymentPlan: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    paymentGateway: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'planName',
      
        label: 'Plan Name',
      
        type: 'input',
      
        placeholder: 'Input Plan Name',
      
        options: '',
      },{
        key: 'currency',
      
        label: 'Currency',
      
        type: 'select',
      
        placeholder: 'Input Currency',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'item',
      
        label: 'Item',
      
        type: 'select',
      
        placeholder: 'Input Item',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'priceDetermination',
      
        label: 'Price Determination',
      
        type: 'select',
      
        placeholder: 'Input Price Determination',
      
        options: '[object Object],[object Object]',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'cost',
      
        label: 'Cost',
      
        type: 'input',
      
        placeholder: 'Input Cost',
      
        options: '',
      },{
        key: 'priceList',
      
        label: 'Price List',
      
        type: 'select',
      
        placeholder: 'Input Price List',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'billingInterval',
      
        label: 'Billing Interval',
      
        type: 'select',
      
        placeholder: 'Input Billing Interval',
      
        options: '[object Object],[object Object],[object Object]',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'billingIntervalCount',
      
        label: 'Billing Interval Count',
      
        type: 'input',
      
        placeholder: 'Input Billing Interval Count',
      
        options: '',
      },{
        key: 'paymentPlan',
      
        label: 'Payment Plan',
      
        type: 'input',
      
        placeholder: 'Input Payment Plan',
      
        options: '',
      },{
        key: 'paymentPlan',
      
        label: 'Payment Plan',
      
        type: 'input',
      
        placeholder: 'Input Payment Plan',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'paymentGateway',
      
        label: 'Payment Gateway',
      
        type: 'select',
      
        placeholder: 'Input Payment Gateway',
      
        options: '',
      },
    ]
  };
} 
