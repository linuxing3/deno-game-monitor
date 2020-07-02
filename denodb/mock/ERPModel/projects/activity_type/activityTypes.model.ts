// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ActivityType
|--------------------------------------------------------------------------
|
| Model of activityTypes
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ActivityType extends Model {
  static table = "activityTypes";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    activityType: DataTypes.STRING,
    defaultCostingRate: DataTypes.STRING,
    defaultBillingRate: DataTypes.STRING,
    disabled: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "activityType",
        label: "Activity Type",
        type: "input",
        placeholder: "Input Activity Type",
        options: "",
      },
      {
        key: "defaultCostingRate",
        label: "Default Costing Rate",
        type: "input",
        placeholder: "Input Default Costing Rate",
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
        key: "defaultBillingRate",
        label: "Default Billing Rate",
        type: "input",
        placeholder: "Input Default Billing Rate",
        options: "",
      },
      {
        key: "disabled",
        label: "Disabled",
        type: "input",
        placeholder: "Input Disabled",
        options: "",
      },
    ],
  };
}
