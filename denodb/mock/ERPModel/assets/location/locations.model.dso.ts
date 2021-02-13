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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("locations")
export class Location extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  locationName!: string;
  
  @Field({ type: FieldType.STRING })
  parentLocation!: string;
  
  @Field({ type: FieldType.STRING })
  isContainer!: string;
  
  @Field({ type: FieldType.STRING })
  isGroup!: string;
  
  @Field({ type: FieldType.STRING })
  locationDetails!: string;
  
  @Field({ type: FieldType.STRING })
  latitude!: string;
  
  @Field({ type: FieldType.STRING })
  longitude!: string;
  
  @Field({ type: FieldType.STRING })
  area!: string;
  
  @Field({ type: FieldType.STRING })
  areaUom!: string;
  
  @Field({ type: FieldType.STRING })
  location!: string;
  
  @Field({ type: FieldType.STRING })
  treeDetails!: string;
  
  @Field({ type: FieldType.STRING })
  lft!: string;
  
  @Field({ type: FieldType.STRING })
  rgt!: string;
  
  @Field({ type: FieldType.STRING })
  oldParent!: string;
  
  
}

export interface ILocation {
  id: number;
  locationName: string;
  parentLocation: string;
  isContainer: string;
  isGroup: string;
  locationDetails: string;
  latitude: string;
  longitude: string;
  area: string;
  areaUom: string;
  location: string;
  treeDetails: string;
  lft: string;
  rgt: string;
  oldParent: string;
  
}
