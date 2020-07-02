// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOffer
|--------------------------------------------------------------------------
|
| Model of jobOffers
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class JobOffer extends Model {
  static table = "jobOffers";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    jobApplicant: DataTypes.STRING,
    applicantName: DataTypes.STRING,
    status: DataTypes.STRING,
    offerDate: DataTypes.STRING,
    designation: DataTypes.STRING,
    company: DataTypes.STRING,
    jobOfferTerms: DataTypes.STRING,
    selectTermsAndConditions: DataTypes.STRING,
    termsAndConditions: DataTypes.STRING,
    printingDetails: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "jobApplicant",
        label: "Job Applicant",
        type: "select",
        placeholder: "Input Job Applicant",
        options: "",
      },
      {
        key: "applicantName",
        label: "Applicant Name",
        type: "input",
        placeholder: "Input Applicant Name",
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
        key: "status",
        label: "Status",
        type: "select",
        placeholder: "Input Status",
        options: "[object Object],[object Object]",
      },
      {
        key: "offerDate",
        label: "Offer Date",
        type: "input",
        placeholder: "Input Offer Date",
        options: "",
      },
      {
        key: "designation",
        label: "Designation",
        type: "select",
        placeholder: "Input Designation",
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
        key: "jobOfferTerms",
        label: "Job Offer Terms",
        type: "select",
        placeholder: "Input Job Offer Terms",
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
        key: "selectTermsAndConditions",
        label: "Select Terms And Conditions",
        type: "select",
        placeholder: "Input Select Terms And Conditions",
        options: "",
      },
      {
        key: "termsAndConditions",
        label: "Terms And Conditions",
        type: "input",
        placeholder: "Input Terms And Conditions",
        options: "",
      },
      {
        key: "printingDetails",
        label: "Printing Details",
        type: "input",
        placeholder: "Input Printing Details",
        options: "",
      },
      {
        key: "letterHead",
        label: "Letter Head",
        type: "select",
        placeholder: "Input Letter Head",
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
        key: "printHeading",
        label: "Print Heading",
        type: "select",
        placeholder: "Input Print Heading",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
        options: "",
      },
    ],
  };
}
