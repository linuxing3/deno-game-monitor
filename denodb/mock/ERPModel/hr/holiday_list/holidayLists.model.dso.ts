// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HolidayList
|--------------------------------------------------------------------------
|
| Model Class and Interface of holidayLists
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("holidayLists")
export class HolidayList extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  holidayListName!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  totalHolidays!: string;
  
  @Field({ type: FieldType.STRING })
  addWeeklyHolidays!: string;
  
  @Field({ type: FieldType.STRING })
  weeklyOff!: string;
  
  @Field({ type: FieldType.STRING })
  addToHolidays!: string;
  
  @Field({ type: FieldType.STRING })
  holidays!: string;
  
  @Field({ type: FieldType.STRING })
  clearTable!: string;
  
  @Field({ type: FieldType.STRING })
  color!: string;
  
  
}

export interface IHolidayList {
  id: number;
  holidayListName: string;
  fromDate: string;
  toDate: string;
  totalHolidays: string;
  addWeeklyHolidays: string;
  weeklyOff: string;
  addToHolidays: string;
  holidays: string;
  clearTable: string;
  color: string;
  
}
