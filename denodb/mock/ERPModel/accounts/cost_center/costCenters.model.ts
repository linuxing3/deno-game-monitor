// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CostCenter
|--------------------------------------------------------------------------
|
| Model of costCenters
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class CostCenter extends Model {
  static table = "costCenters";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    costCenterName: DataTypes.STRING,
    costCenterNumber: DataTypes.STRING,
    parentCostCenter: DataTypes.STRING,
    company: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "costCenterName",
        label: "Cost Center Name",
        type: "input",
        placeholder: "Input Cost Center Name",
        options: "",
      },
      {
        key: "costCenterNumber",
        label: "Cost Center Number",
        type: "input",
        placeholder: "Input Cost Center Number",
        options: "",
      },
      {
        key: "parentCostCenter",
        label: "Parent Cost Center",
        type: "select",
        placeholder: "Input Parent Cost Center",
        options: "",
      },
      {
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
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
        key: "isGroup",
        label: "Is Group",
        type: "input",
        placeholder: "Input Is Group",
        options: "",
      },
      {
        key: "lft",
        label: "Lft",
        type: "input",
        placeholder: "Input Lft",
        options: "",
      },
      {
        key: "rgt",
        label: "Rgt",
        type: "input",
        placeholder: "Input Rgt",
        options: "",
      },
      {
        key: "oldParent",
        label: "Old Parent",
        type: "select",
        placeholder: "Input Old Parent",
        options: "",
      },
    ],
  };
}
