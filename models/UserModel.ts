import {
  DataTypes,
  Model,
} from "../deps.ts";

// Define a database modelclass 
export default class User extends Model {
  static table = 'user';
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  };

  static defaults = {
    name: "xingwenju",
    email: "xingwenju@gmail.com",
    password: "20090909",
  };
}