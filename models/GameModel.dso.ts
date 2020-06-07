
import {
  BaseModel,
  Field,
  FieldType,
  Model,
  CottonModel,
  CottonFieldType
} from "../deps.ts";

@Model("games")
export class GameModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  @Field({ type: FieldType.STRING, length: 30}) 
  name?: string;

  @Field({ type: FieldType.STRING, length: 30 }) 
  description?: string;
  
  @Field({ type: FieldType.STRING, length: 10, notNull: true }) 
  pid!: string;

  @Field({ type: FieldType.STRING, length: 30 })
  timestramp?: string;

}


export class Game extends CottonModel {
  static tableName = "games";
  static fields = {
    name: { type: CottonFieldType.STRING },
    description: { type: CottonFieldType.STRING },
    pid: { type: CottonFieldType.STRING },
    timestramp: { type: CottonFieldType.STRING },
    created_at: { type: CottonFieldType.DATE },
    updated_at: { type: CottonFieldType.DATE },
  };

  name!: string;
  description!: string;
  pid!: string;
  timestramp!: string;
  created_at!: Date;
  updated_at!: Date;
}