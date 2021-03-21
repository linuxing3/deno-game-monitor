// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Location
|--------------------------------------------------------------------------
|
| Model Class and Interface of locations
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Location extends Model { 
  static table = "locations";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    locationName: DataTypes.STRING,
    parentLocation: DataTypes.STRING,
    isContainer: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    locationDetails: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    area: DataTypes.STRING,
    areaUom: DataTypes.STRING,
    location: DataTypes.STRING,
    treeDetails: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

}
