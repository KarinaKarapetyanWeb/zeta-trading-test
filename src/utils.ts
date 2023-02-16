const getQueryArray = (
  obj: any = {},
  path: string[] = [],
  result: string[] = []
) =>
  Object.entries(obj).reduce((acc, [k, v]) => {
    path.push(k);

    if (v instanceof Object) {
      getQueryArray(v, path, acc);
    } else if (v != null) {
      acc.push(
        `${path.map((n: any, i: any) => (i ? `[${n}]` : n)).join("")}=${v}`
      );
    }

    path.pop();

    return acc;
  }, result);

const getQueryString = (obj: any) => getQueryArray(obj).join("&");

export default getQueryString;
