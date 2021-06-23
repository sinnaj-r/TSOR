// Filter $filter

import {
  LOGICAL_OPERATORS,
  COMPARISON_OPERATORS,
  COLLECTION_OPERATORS,
} from './OperatorTypes';

// TODO Non-String Filters

export type StringFilterKeys<
  T,
  P extends string & keyof T = Extract<keyof T, string>
> =
  | `tolower(${P})`
  | `toupper(${P})`
  | `trim(${P})`
  | `substring(${P},${number})`;

type s = '' | ' ';

export type FilterStatements<T, P extends string & keyof T> =
  | `concat('${P}',${s}'${string}')`
  | `contains('${P}',${s}'${string}')`
  | `endswith('${P}',${s}'${string}')`
  | `startswith('${P}',${s}'${string}')`
  // Allow both quote types
  | `concat("${P}",${s}"${string}")`
  | `contains("${P}",${s}"${string}")`
  | `endswith("${P}",${s}"${string}")`
  | `startswith("${P}",${s}"${string}")`;

export type StringFilter<T> = {
  [P in StringFilterKeys<T>]?: P extends keyof T
    ? T[P]
    : P extends StringFilterKeys<T, infer U>
    ? T[U]
    : never;
};

// and: [...]
export type LogicFilter<T> = {
  [K in typeof LOGICAL_OPERATORS[number]]?: K extends 'not'
    ? FilterObject<T>
    : Filter<T>;
};

export type NormalFilter<T> = {
  [P in keyof T]?:  // Filter in Form of `prop: 'value'`
    | T[P]
    // Filter in Form of `prop: {lte: 'value'}`
    | { [O in typeof COMPARISON_OPERATORS[number]]?: T[P] }
    // In Filter
    | { [O in 'in']?: T[P][] }
    // Filter in Form of `prop: {any: [...]}`
    | {
        [M in typeof COLLECTION_OPERATORS[number]]?: T[P][];
      };
};

export type FilterObject<T> =
  | FilterStatements<T, Extract<keyof T, string>>
  | (NormalFilter<T> & StringFilter<T> & LogicFilter<T>);

export type Filter<T> = FilterObject<T> | FilterObject<T>[];
