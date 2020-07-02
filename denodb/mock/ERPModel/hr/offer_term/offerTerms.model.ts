// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OfferTerm
|--------------------------------------------------------------------------
|
| Model of offerTerms
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class OfferTerm extends Model {
  static table = "offerTerms";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    offerTerm: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "offerTerm",
        label: "Offer Term",
        type: "input",
        placeholder: "Input Offer Term",
        options: "",
      },
    ],
  };
}
