// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React } from "../deps.ts";
import env from "../config/env.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      span: any;
    }
  }
}

// const data =  await fetch(`${env["HOST"]}:${env["PORT"]}/api/v1/users`);

/**
 * LIsComponent
 *
 * @returns
 */
const List = () => {
  async function fetchData() {
    // effect
    const response: any = await fetch("/api/v1/users");
    const data = await response.json();
    console.log(data);
    setList(data.data);
  }

  (React as any).useEffect(() => {
    fetchData();
  }, []);

  const [list, setList] = (React as any).useState([
    {
      name: "xingxiaorui",
      password: "200090909",
      email: "xingwenju@gmail.com",
    },
  ]);

  const handleClick = async (id: string | number) => {
    console.log(id);
    await fetch("/api/v1/users", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <div class="pt-50 w-full max-w-xs max-w-sm border-4 border-gray-600">
      <p class="pt-8 pd-8 font-sans text-lg text-gray-800 text-center">
        <h1>User List</h1>
      </p>
      <div class="grid grid-cols-3 gap-4 pl-10 pr-10">
        {list.map((item: any) => {
          return (
            <div class="h-12 flex items-center justify-center">
              <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
