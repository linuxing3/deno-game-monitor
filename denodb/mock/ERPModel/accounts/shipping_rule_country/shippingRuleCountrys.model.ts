// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRuleCountry
|--------------------------------------------------------------------------
|
| Model of shippingRuleCountrys
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class ShippingRuleCountry extends Model {
  static table = "shippingRuleCountrys";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    country: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "country",
        label: "Country",
        type: "select",
        placeholder: "Input Country",
        options: "",
      },
    ],
  };
}
