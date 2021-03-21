// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockList
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockLists
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("leaveBlockLists")
export class LeaveBlockList extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  leaveBlockListName!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  appliesToCompany!: string;
  
  @Field({ type: FieldType.STRING })
  blockDays!: string;
  
  @Field({ type: FieldType.STRING })
  leaveBlockListDates!: string;
  
  @Field({ type: FieldType.STRING })
  allowUsers!: string;
  
  @Field({ type: FieldType.STRING })
  leaveBlockListAllowed!: string;
  
  
}

export interface ILeaveBlockList {
  id: number;
  leaveBlockListName: string;
  company: string;
  appliesToCompany: string;
  blockDays: string;
  leaveBlockListDates: string;
  allowUsers: string;
  leaveBlockListAllowed: string;
  
}
