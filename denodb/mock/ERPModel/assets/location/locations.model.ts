// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Location
|--------------------------------------------------------------------------
|
| Model of locations
|
*/
import {
  DataTypes,
  Model,
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "locationName",
        label: "Location Name",
        type: "input",
        placeholder: "Input Location Name",
        options: "",
      },
      {
        key: "parentLocation",
        label: "Parent Location",
        type: "select",
        placeholder: "Input Parent Location",
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
        key: "isContainer",
        label: "Is Container",
        type: "input",
        placeholder: "Input Is Container",
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
        key: "locationDetails",
        label: "Location Details",
        type: "input",
        placeholder: "Input Location Details",
        options: "",
      },
      {
        key: "latitude",
        label: "Latitude",
        type: "input",
        placeholder: "Input Latitude",
        options: "",
      },
      {
        key: "longitude",
        label: "Longitude",
        type: "input",
        placeholder: "Input Longitude",
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
        key: "area",
        label: "Area",
        type: "input",
        placeholder: "Input Area",
        options: "",
      },
      {
        key: "areaUom",
        label: "Area Uom",
        type: "select",
        placeholder: "Input Area Uom",
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
        key: "location",
        label: "Location",
        type: "input",
        placeholder: "Input Location",
        options: "",
      },
      {
        key: "treeDetails",
        label: "Tree Details",
        type: "input",
        placeholder: "Input Tree Details",
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
        type: "input",
        placeholder: "Input Old Parent",
        options: "",
      },
    ],
  };
}
