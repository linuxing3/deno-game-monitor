// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HolidayList
|--------------------------------------------------------------------------
|
| Model of holidayLists
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class HolidayList extends Model {
  static table = "holidayLists";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    holidayListName: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    totalHolidays: DataTypes.STRING,
    addWeeklyHolidays: DataTypes.STRING,
    weeklyOff: DataTypes.STRING,
    addToHolidays: DataTypes.STRING,
    holidays: DataTypes.STRING,
    holidays: DataTypes.STRING,
    clearTable: DataTypes.STRING,
    color: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "holidayListName",
        label: "Holiday List Name",
        type: "input",
        placeholder: "Input Holiday List Name",
        options: "",
      },
      {
        key: "fromDate",
        label: "From Date",
        type: "input",
        placeholder: "Input From Date",
        options: "",
      },
      {
        key: "toDate",
        label: "To Date",
        type: "input",
        placeholder: "Input To Date",
        options: "",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "totalHolidays",
        label: "Total Holidays",
        type: "input",
        placeholder: "Input Total Holidays",
        options: "",
      },
      {
        key: "addWeeklyHolidays",
        label: "Add Weekly Holidays",
        type: "input",
        placeholder: "Input Add Weekly Holidays",
        options: "",
      },
      {
        key: "weeklyOff",
        label: "Weekly Off",
        type: "select",
        placeholder: "Input Weekly Off",
        options:
          "[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]",
      },
      {
        key: "addToHolidays",
        label: "Add To Holidays",
        type: "select",
        placeholder: "Input Add To Holidays",
        options: "",
      },
      {
        key: "holidays",
        label: "Holidays",
        type: "input",
        placeholder: "Input Holidays",
        options: "",
      },
      {
        key: "holidays",
        label: "Holidays",
        type: "select",
        placeholder: "Input Holidays",
        options: "",
      },
      {
        key: "clearTable",
        label: "Clear Table",
        type: "select",
        placeholder: "Input Clear Table",
        options: "",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "color",
        label: "Color",
        type: "input",
        placeholder: "Input Color",
        options: "",
      },
    ],
  };
}
