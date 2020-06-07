
import { Model, FieldType } from "https://deno.land/x/cotton/mod.ts";

export class GameModel extends Model {
  static tableName = "games";
  static fields = {
    name: { type: FieldType.STRING },
    description: { type: FieldType.STRING },
    pid: { type: FieldType.STRING },
    timestramp: { type: FieldType.STRING },
    created_at: { type: FieldType.DATE },
    updated_at: { type: FieldType.DATE },
  };

  name!: string;
  description!: string;
  pid!: string;
  timestramp!: string;
  created_at!: Date;
  updated_at!: Date;
}