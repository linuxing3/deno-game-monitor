// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleService
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleServices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class VehicleService extends Model { 
  static table = "vehicleServices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    serviceItem: DataTypes.STRING,
    type: DataTypes.STRING,
    frequency: DataTypes.STRING,
    expense: DataTypes.STRING,
    
  };

}
