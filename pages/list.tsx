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

const List = () => {
  const [list, setList] = (React as any).useState([]);

  const handleClick = async (id: string | number) => {
    await fetch('/ap/v1/users', {
      method: 'delete'
    })
  }

  return (
    <div>
      <h1>User List</h1>
      {list.map((item: any) => {
        return <p>{item.name}<span onClick={() => handleClick(item.id)}>-</span></p> 
      })}
    </div>
  );
};

export default List;