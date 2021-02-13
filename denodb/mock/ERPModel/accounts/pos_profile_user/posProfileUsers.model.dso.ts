// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosProfileUser
|--------------------------------------------------------------------------
|
| Model Class and Interface of posProfileUsers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("posProfileUsers")
export class PosProfileUser extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  default!: string;
  
  @Field({ type: FieldType.STRING })
  user!: string;
  
  
}

export interface IPosProfileUser {
  id: number;
  default: string;
  user: string;
  
}
