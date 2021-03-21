// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelItinerary
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelItineraries
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TravelItinerary extends Model { 
  static table = "travelItineraries";
  static timestamps = true;
  
  static fields = {
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

}
