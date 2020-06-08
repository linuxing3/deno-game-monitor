import { connect, Model, FieldType } from "https://deno.land/x/cotton/mod.ts";
import { mysqlOptions} from "../config/db.ts";

class User extends Model {
  static tableName = "users";
  static fields = {
    name: { type: FieldType.STRING },
    email: { type: FieldType.STRING },
    password: { type: FieldType.STRING },
  };

  name!: string;
  email!: string;
  password!: string;
}

// @desc    Get all users
// @route   GET /api/v1/users
const getUsers = async ({ response }: { response: any }) => {

  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const users = await User.find();
  await db.disconnect();

  response.body = {
    success: true,
    data: users,
  };
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
const getUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const user = await User.findOne(1);
  await db.disconnect();

  if (user) {
    response.status = 200;
    response.body = {
      success: true,
      data: user,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No user found",
    };
  }
};

// @desc    Add user
// @route   Post /api/v1/users
const addUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  const user = request.user;
  console.log(user);

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const db = await connect({ type: "mysql", ...mysqlOptions });
    db.addModel(User);
    const { id } = await User.insert(body.value);
    await db.disconnect();
    
    response.status = 201;
    response.body = {
      success: true,
      auth: { user },
      data: { id },
    };
  }
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
const updateUser = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const body = await request.body();

  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  const user = {};
  // const user = await User.update(body.value, { id: params.id });
  await db.disconnect();

  if (user) {
    response.status = 200;
    response.body = {
      success: true,
      data: '',
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Failed to update",
    };
  }
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
const deleteUser = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const db = await connect({ type: "mysql", ...mysqlOptions });
  db.addModel(User);
  // const user = await User.delete(params.id);
  await db.disconnect();

  response.body = {
    success: true,
    msg: `user deleted `,
  };
};

export { User, getUsers, getUser, addUser, updateUser, deleteUser };
