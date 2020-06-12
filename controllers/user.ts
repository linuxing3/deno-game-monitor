import {
  findRecord,
  addRecord,
  findAllRecord,
  updateRecord,
  deleteRecord,
} from "../services/crud.sql.ts";
import { userModel } from "../services/db.sql.ts";

// @desc    Get all users
// @route   GET /api/v1/users
const getUsers = async ({ response }: { response: any }) => {
  const users = await findAllRecord(userModel);
  response.body = {
    success: true,
    data: users,
  };
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
const getUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const user = await findRecord(userModel, { id: body.value.id });

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

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const id = await addRecord(userModel, body.value);
    response.status = 201;
    response.body = {
      success: true,
      data: { id },
    };
  }
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
const updateUser = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  let user = await findRecord(userModel, { id: body.value.id });

  if (user) {
    const data = await updateRecord(
      userModel,
      body.value
    );

    response.status = 200;
    response.body = {
      success: true,
      data,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No user found",
    };
  }
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
const deleteUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  console.log(body);
  const count = await deleteRecord(userModel, { id: body.value.id });

  response.body = {
    success: true,
    msg: `${count} user deleted `,
  };
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
