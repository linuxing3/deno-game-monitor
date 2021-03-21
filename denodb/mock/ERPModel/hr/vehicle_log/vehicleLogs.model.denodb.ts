// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleLog
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleLogs
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class VehicleLog extends Model { 
  static table = "vehicleLogs";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    employee: DataTypes.STRING,
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    odometerReading: DataTypes.STRING,
    date: DataTypes.STRING,
    odometer: DataTypes.STRING,
    refuellingDetails: DataTypes.STRING,
    fuelQty: DataTypes.STRING,
    fuelPrice: DataTypes.STRING,
    supplier: DataTypes.STRING,
    invoiceRef: DataTypes.STRING,
    serviceDetails: DataTypes.STRING,
    serviceDetail: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
