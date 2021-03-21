// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of posSettings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("posSettings")
export class PosSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  usePosInOfflineMode!: string;
  
  
}

export interface IPosSetting {
  id: number;
  usePosInOfflineMode: string;
  
}
