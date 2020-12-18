// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMappingTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappingTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cashFlowMappingTemplates")
export class CashFlowMappingTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  templateName!: string;
  
  @Field({ type: FieldType.STRING })
  cashFlowMapping!: string;
  
  
}

export interface ICashFlowMappingTemplate {
  id: number;
  templateName: string;
  cashFlowMapping: string;
  
}
