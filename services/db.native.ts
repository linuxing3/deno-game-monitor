import { genSalt, hash, v4 } from "../deps.ts";

interface INativeResult {
  data: any;
  error: boolean;
  status: number;
}

export default class User {
  ukey?: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(email: string) {
    this.email = email;
  }

  // create
  static async create(
    email: string,
    password: string,
  ): Promise<INativeResult> {
    // check if user exists
    if (emailIndex.get(email) != undefined) {
      return { data: "User already exists", error: true, status: 400 };
    }

    // set the user
    const user = new User(email);
    user.ukey = v4.generate();
    const salt = await genSalt(8);
    user.password = await hash(password, salt);
    user.createdAt = new Date();
    user.updatedAt = new Date();

    // save user
    db.set(user.ukey!, user);
    emailIndex.set(user.email, user.ukey!);
    return { data: user, error: false, status: 201 };
  }

  // read
  static getByUkey(ukey: string) {
    const u = db.get(ukey);
    if (u == undefined) {
      return undefined;
    }
    const user = new User(u.email);
    user.ukey = u.ukey;
    user.password = u.password;
    user.createdAt = u.createdAt;
    user.updatedAt = u.updatedAt;
    return user;
  }

  // readAll
  static getAll() {
    const users: User[] = [];
    db.forEach((item) => {
      users.push(item);
    });
    return users;
  }

  // update
  save(): boolean {
    if (this.ukey == undefined || db.get(this.ukey!) == undefined) {
      return false;
    }
    const u = db.get(this.ukey!);
    emailIndex.delete(u!.email);
    this.updatedAt = new Date();
    db.set(this.ukey!, this);
    emailIndex.set(this.email, this.ukey!);
    return true;
  }

  // delete
  delete(): boolean {
    if (this.ukey == undefined || db.get(this.ukey!) == undefined) {
      return false;
    }
    db.delete(this.ukey!);
    emailIndex.delete(this.email);
    return true;
  }
}

// temp database using Map
const db: Map<string, User> = new Map();
const emailIndex: Map<string, string> = new Map();
