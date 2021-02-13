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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("jobOffers")
export class JobOffer extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  jobApplicant!: string;
  
  @Field({ type: FieldType.STRING })
  applicantName!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  offerDate!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  jobOfferTerms!: string;
  
  @Field({ type: FieldType.STRING })
  selectTermsAndConditions!: string;
  
  @Field({ type: FieldType.STRING })
  termsAndConditions!: string;
  
  @Field({ type: FieldType.STRING })
  printingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IJobOffer {
  id: number;
  jobApplicant: string;
  applicantName: string;
  status: string;
  offerDate: string;
  designation: string;
  company: string;
  jobOfferTerms: string;
  selectTermsAndConditions: string;
  termsAndConditions: string;
  printingDetails: string;
  letterHead: string;
  printHeading: string;
  amendedFrom: string;
  
}
