export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;

export type KeysOfType<T, TProp> = Exclude<{ [P in keyof T]: T[P] extends TProp ? P : never }[keyof T], undefined>;

export type FilterOfType<T, TProp> = Omit<
  { [P in keyof T]: T[P] extends TProp ? T[P] : never },
  KeysOfType<{ [P in keyof T]: T[P] extends TProp ? T[P] : never }, never | undefined>
>;

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type ElementMemberType<
  T extends ReadonlyArray<unknown>,
  M extends keyof ElementType<T>
> = T extends ReadonlyArray<unknown> ? ElementType<T>[M] : never;

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];

export type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;

export type AwaitReturnType<T extends (...args: any) => any> = Await<ReturnType<T>>;

export type KeyBy<K extends keyof V, V extends Record<any, any>> = Record<V[K], V>;

export type ValueOf<T> = T[keyof T];
