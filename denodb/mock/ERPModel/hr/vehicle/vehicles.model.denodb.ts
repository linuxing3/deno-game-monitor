// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Vehicle
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicles
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Vehicle extends Model { 
  static table = "vehicles";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    licensePlate: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    details: DataTypes.STRING,
    odometerValueLast: DataTypes.STRING,
    acquisitionDate: DataTypes.STRING,
    location: DataTypes.STRING,
    chassisNo: DataTypes.STRING,
    vehicleValue: DataTypes.STRING,
    employee: DataTypes.STRING,
    insuranceDetails: DataTypes.STRING,
    insuranceCompany: DataTypes.STRING,
    policyNo: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    additionalDetails: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    fuelUom: DataTypes.STRING,
    lastCarbonCheck: DataTypes.STRING,
    color: DataTypes.STRING,
    wheels: DataTypes.STRING,
    doors: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
