import User from "./UserModel.ts"
import Document from "./DocumentModel.ts"
import { Model } from "../deps.ts"

interface ModelMap {
  [name: string]: typeof Model;
}

export const models: ModelMap = {
  user: User,
  document: Document
};

export const modelsArray = [ User, Document ];

export default models;