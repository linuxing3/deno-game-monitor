// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React } from "../deps.ts";
import env from "../config/env.ts";
import { postOption, token } from "../helpers/request.ts";

// const data =  await fetch(`${env["HOST"]}:${env["PORT"]}/api/v1/users`);

const LoginComponent = () => {
  const [user, setUser] = (React as any).useState({
      name: 'xingxiaorui',
      password: '200090909',
      email: 'xingwenju@gmail.com'
  });

  const handleClick = async () => {
    console.log(user);
    // Try login
    const response: any = await fetch('/auth/login', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    });
    console.log(response);

    // if user exists try login
    if (response.status !== 200) {
        const response: any = await fetch('/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
    }
  }

  return (
    <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={user.name} onChange={(e: any) => setUser({name: e.target.value})} />
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder={user.password} onChange={(e: any) => setUser({password: e.target.value})} />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
        <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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