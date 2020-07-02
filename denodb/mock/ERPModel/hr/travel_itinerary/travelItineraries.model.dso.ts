// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelItinerary
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelItineraries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("travelItineraries")
export class TravelItinerary extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  travelFrom!: string;
  
  @Field({ type: FieldType.STRING })
  travelTo!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfTravel!: string;
  
  @Field({ type: FieldType.STRING })
  mealPreference!: string;
  
  @Field({ type: FieldType.STRING })
  travelAdvanceRequired!: string;
  
  @Field({ type: FieldType.STRING })
  advanceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  departureDatetime!: string;
  
  @Field({ type: FieldType.STRING })
  arrivalDatetime!: string;
  
  @Field({ type: FieldType.STRING })
  lodgingRequired!: string;
  
  @Field({ type: FieldType.STRING })
  preferredAreaForLodging!: string;
  
  @Field({ type: FieldType.STRING })
  checkInDate!: string;
  
  @Field({ type: FieldType.STRING })
  checkOutDate!: string;
  
  @Field({ type: FieldType.STRING })
  otherDetails!: string;
  
  
}

export interface ITravelItinerary {
  id: number;
  travelFrom: string;
  travelTo: string;
  modeOfTravel: string;
  mealPreference: string;
  travelAdvanceRequired: string;
  advanceAmount: string;
  departureDatetime: string;
  arrivalDatetime: string;
  lodgingRequired: string;
  preferredAreaForLodging: string;
  checkInDate: string;
  checkOutDate: string;
  otherDetails: string;
  
}
