// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
// deno-lint-ignore-file
import { React, ReactHookForm } from "../deps.ts";
import env from "../config/env.ts";
import { postOption, token } from "../helpers/request.ts";

const LoginComponent = () => {
  const { register, handleSubmit } = (ReactHookForm as any).useForm();
  const [user, setUser] = (React as any).useState({
    name: "xingxiaorui",
    password: "200090909",
    email: "xingwenju@gmail.com",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    // Try login
    const response: any = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);

    // if user exists try login
    if (response.status !== 200) {
      const response: any = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  };

  return (
    <div class="w-full pl-10 pt-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Username
          </label>
          <input
            name="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            ref={register}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            name="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            ref={register}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            ref={register}
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <input
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          />
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default LoginComponent;
