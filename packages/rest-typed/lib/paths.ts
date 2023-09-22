type RecursivelyExtractPathParams<T extends string,
  TAcc extends null | Record<string, string>> = T extends `/:${infer PathParam}/${infer Right}`
  ? { [key in PathParam]: string } & RecursivelyExtractPathParams<Right, TAcc>
  : T extends `/:${infer PathParam}`
    ? { [key in PathParam]: string }
    : T extends `/${string}/${infer Right}`
      ? RecursivelyExtractPathParams<Right, TAcc>
      : T extends `/${string}`
        ? TAcc
        : T extends `:${infer PathParam}/${infer Right}`
          ? { [key in PathParam]: string } & RecursivelyExtractPathParams<Right, TAcc>
          : T extends `:${infer PathParam}`
            ? TAcc & { [key in PathParam]: string }
            : T extends `${string}/${infer Right}`
              ? RecursivelyExtractPathParams<Right, TAcc>
              : TAcc;

/*export type ParamsFromUrl<T extends string> = RecursivelyExtractPathParams<T,
  {}> extends infer U
  ? {
    [key in keyof U]: U[key];
  }
  : never;*/

export type ParamsFromUrl<T extends string> =
  [keyof RecursivelyExtractPathParams<T, {}>] extends [never] ? never : RecursivelyExtractPathParams<T, {}>

//let sas: ParamsFromUrl<"sas">

export const insertParamsIntoPath = <T extends string>({ path, params, }: {
  path: T;
  params: ParamsFromUrl<T> extends never ? {} : ParamsFromUrl<T>;
}) => {
  return path
    .replace(/:([^/]+)/g, (_, p) => {
      return (params as any)[p] || '';
    })
    .replace(/\/\//g, '/');
};

//const test = insertParamsIntoPath({ path: "sas/:id/:nice", params: { id: "", nice: "" } })


