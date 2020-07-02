// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelItinerary
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelItinerarys
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


export class TravelItinerary extends Model { 
  static table = "travelItinerarys";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    travelFrom: DataTypes.STRING,
    travelTo: DataTypes.STRING,
    modeOfTravel: DataTypes.STRING,
    mealPreference: DataTypes.STRING,
    travelAdvanceRequired: DataTypes.STRING,
    advanceAmount: DataTypes.STRING,
    departureDatetime: DataTypes.STRING,
    arrivalDatetime: DataTypes.STRING,
    lodgingRequired: DataTypes.STRING,
    preferredAreaForLodging: DataTypes.STRING,
    checkInDate: DataTypes.STRING,
    checkOutDate: DataTypes.STRING,
    otherDetails: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'travelFrom',
        label: 'Travel From',
        type: 'input',
        placeholder: 'Input Travel From',
        options: '',
        
      },
      {
        key: 'travelTo',
        label: 'Travel To',
        type: 'input',
        placeholder: 'Input Travel To',
        options: '',
        
      },
      {
        key: 'modeOfTravel',
        label: 'Mode Of Travel',
        type: 'select',
        placeholder: 'Input Mode Of Travel',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'mealPreference',
        label: 'Meal Preference',
        type: 'select',
        placeholder: 'Input Meal Preference',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'travelAdvanceRequired',
        label: 'Travel Advance Required',
        type: 'input',
        placeholder: 'Input Travel Advance Required',
        options: '',
        
      },
      {
        key: 'advanceAmount',
        label: 'Advance Amount',
        type: 'input',
        placeholder: 'Input Advance Amount',
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
        key: 'departureDatetime',
        label: 'Departure Datetime',
        type: 'input',
        placeholder: 'Input Departure Datetime',
        options: '',
        
      },
      {
        key: 'arrivalDatetime',
        label: 'Arrival Datetime',
        type: 'input',
        placeholder: 'Input Arrival Datetime',
        options: '',
        
      },
      {
        key: 'lodgingRequired',
        label: 'Lodging Required',
        type: 'input',
        placeholder: 'Input Lodging Required',
        options: '',
        
      },
      {
        key: 'preferredAreaForLodging',
        label: 'Preferred Area For Lodging',
        type: 'input',
        placeholder: 'Input Preferred Area For Lodging',
        options: '',
        
      },
      {
        key: 'checkInDate',
        label: 'Check In Date',
        type: 'input',
        placeholder: 'Input Check In Date',
        options: '',
        
      },
      {
        key: 'checkOutDate',
        label: 'Check Out Date',
        type: 'input',
        placeholder: 'Input Check Out Date',
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
        key: 'otherDetails',
        label: 'Other Details',
        type: 'input',
        placeholder: 'Input Other Details',
        options: '',
        
      },
      
    ]
  };
}

export interface ITravelItinerary {
  id: FieldValue;
  travelFrom: FieldValue;
  travelTo: FieldValue;
  modeOfTravel: FieldValue;
  mealPreference: FieldValue;
  travelAdvanceRequired: FieldValue;
  advanceAmount: FieldValue;
  departureDatetime: FieldValue;
  arrivalDatetime: FieldValue;
  lodgingRequired: FieldValue;
  preferredAreaForLodging: FieldValue;
  checkInDate: FieldValue;
  checkOutDate: FieldValue;
  otherDetails: FieldValue;
  
}
