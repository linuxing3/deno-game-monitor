// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CasualDB } from "../deps.ts";

// create an interface to describe the structure of your JSON
export interface RootSchema {
  posts: Array<{
    id: number;
    title: string;
    views: number;
  }>;
  user: {
    name: string;
  };
}

export const db = new CasualDB<RootSchema>(); // instantiate the db, casually 🤓
