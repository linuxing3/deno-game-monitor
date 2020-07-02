import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  };
}

export class Militant extends Model {
  static table = "militants";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    admitted_at: DataTypes.STRING,
    formalized_at: DataTypes.STRING,
    registered_at: DataTypes.STRING,
    transfered_at: DataTypes.DATE,
  };
}

export class Member extends Model {
  static table = "members";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    department: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    etnia: DataTypes.STRING,
    academicBackground: DataTypes.STRING,
    foreignLanguage: DataTypes.STRING,
    politicalRole: DataTypes.STRING,
    positionAndRank: DataTypes.STRING,
    militantRole: DataTypes.STRING,
    duty: DataTypes.STRING,
    fromEntity: DataTypes.STRING,
    arrivingDate: DataTypes.DATE,
    rotatingDate: DataTypes.DATE,
    sendingEntity: DataTypes.STRING,
    conyugeName: DataTypes.STRING,
    conyugeEntity: DataTypes.STRING,
    conyugeBonus: DataTypes.STRING,
    memo: DataTypes.STRING,
    protocolId: DataTypes.STRING,
    isActive: DataTypes.STRING,
    militant: DataTypes.STRING,
    appraisals: DataTypes.STRING,
    designations: DataTypes.STRING,
    projects: DataTypes.STRING,
  };
}
export class Document extends Model {
  static table = "documents";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    year: DataTypes.STRING,
    date: DataTypes.DATE,
    classiLevel: DataTypes.STRING,
    category: DataTypes.STRING,
    inOrOut: DataTypes.STRING,
    sendingCode: DataTypes.STRING,
    orderedNumber: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    toEntity: DataTypes.STRING,
    copyEntity: DataTypes.STRING,
    attachment: DataTypes.STRING,
    keyword: DataTypes.STRING,
    workEntity: DataTypes.STRING,
    author: DataTypes.STRING,
  };
}