// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapper
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cashFlowMappers")
export class CashFlowMapper extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  sectionName!: string;
  
  @Field({ type: FieldType.STRING })
  sectionHeader!: string;
  
  @Field({ type: FieldType.STRING })
  sectionLeader!: string;
  
  @Field({ type: FieldType.STRING })
  sectionSubtotal!: string;
  
  @Field({ type: FieldType.STRING })
  sectionFooter!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  @Field({ type: FieldType.STRING })
  position!: string;
  
  
}

export interface ICashFlowMapper {
  id: number;
  sectionName: string;
  sectionHeader: string;
  sectionLeader: string;
  sectionSubtotal: string;
  sectionFooter: string;
  accounts: string;
  position: string;
  
}
