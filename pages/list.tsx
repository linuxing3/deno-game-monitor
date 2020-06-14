// deno-lint-ignore-file
// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import { React } from '../deps.ts';
import env from '../config/env.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      h3: any;
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
  const [list, setList] = (React as any).useState([
    {
      name: 'xingxiaorui',
      password: '200090909',
      email: 'xingwenju@gmail.com'
    }
  ]);

  const [tableName, setTableName] = (React as any).useState('users');
  const [baseUrl, setBaseUrl] = (React as any).useState('/api/v1');
  const [tableFields, setTableFields] = (React as any).useState(['']);

  async function fetchData() {
    const hasFields = await fetchFields();
    if (!hasFields) return false;
    const url = `${baseUrl}/${tableName}?table=${tableName}`;
    const response: any = await fetch(url);
    const data = await response.json();
    setList(data.data);
    return true;
  }

  async function fetchFields() {
    // effect
    const url = `${baseUrl}/fields?table=${tableName}`;
    const response: any = await fetch(url);
    const fields = await response.json();
    if (!fields.data) {
      return false;
    }
    setTableFields(fields.data);
    return true;
  }

  (React as any).useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id: string | number) => {
    const url = `${baseUrl}/${tableName}/${id}?table=${tableName}`;
    console.log(id);
    await fetch(url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
  };

  const FieldsTable = (props: any) => {
    return (
      <div class='pt-50 pl-2 pr-2'>
        {props.tableFields.map((field: string) => (
          <p>
            <h3>
              {field} : {props.item[field]}
            </h3>
          </p>
        ))}
      </div>
    );
  };

  return (
    <div class='pt-50 pl-10 pr-10 w-full'>
      <div class='pl-3 pr-3'>
        {list.map((item: any) => {
          return (
            <div class='flex items-center justify-center'>
              <button
                class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </button>
              <FieldsTable tableFields={tableFields} item={item}></FieldsTable>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
