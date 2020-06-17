// Copyright 2018-2020 Author: linuxing3<linuxing3@qq.com>. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Component: DocumentList
|--------------------------------------------------------------------------
|
| React Functional Component with state and effect hooks
|
*/
import { React } from "../../deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
    }
  }
}

const DocumentList = (props: any) => {
  const [data, setData] = (React as any).useState(DocumentList);

  (React as any).useEffect(() => {
    const fetchData = async () => {
      setData("");
    };
    fetchData();
  }, []);

  return (
    <div></div>
  );
};

// hygen starts

// hygen ends

export default DocumentList;
