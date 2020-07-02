// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplate
|--------------------------------------------------------------------------
|
| Model of paymentTermsTemplates
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class PaymentTermsTemplate extends Model {
  static table = "paymentTermsTemplates";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    templateName: DataTypes.STRING,
    paymentTerms: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "templateName",
        label: "Template Name",
        type: "input",
        placeholder: "Input Template Name",
        options: "",
      },
      {
        key: "paymentTerms",
        label: "Payment Terms",
        type: "select",
        placeholder: "Input Payment Terms",
        options: "",
      },
    ],
  };
}
