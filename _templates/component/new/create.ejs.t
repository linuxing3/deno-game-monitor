---
to: components/<%= name %>/<%= name %>.<%= action %>.component.tsx
---
<%
const componentName = h.inflection.titleize(name) + h.inflection.titleize(action) ;
%>// Copyright 2018-2020 Author: linuxing3<linuxing3@qq.com>. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Component: <%= componentName %>
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
};

const <%= componentName %> = (props: any) => {
  const [data, setData] = (React as any).useState(<%= componentName %>);

  (React as any).useEffect(() => {
    const fetchData = async () => {
      setData("")
    }
    fetchData();
  }, []);

  return (
    <div>
    </div>
  );
};

// hygen starts
// hygen ends

export default <%= componentName %>;