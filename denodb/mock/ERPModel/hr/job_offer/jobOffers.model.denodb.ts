// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOffer
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOffers
|
*/
import {
  DataTypes,
  Model
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

}
