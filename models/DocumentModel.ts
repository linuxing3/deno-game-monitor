import {
  DataTypes,
  Model,
} from "../deps.ts";

// Define a database modelclass 
export default class Document extends Model {
  static table = 'document';
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  };

  static defaults = {
    title: "deno",
    content: "deno with denodb",
  };
}