import { concat } from "./utilities";

export interface ThemeProp {
  input?: string;
  field?: string;
  fieldset?: string;
  label?: string;
  legend?: string;
  help?: string;
  error?: string;
  [key: string]: string | undefined;
}

export type ThemeFn<P> = <T extends P>(props: T) => ThemeProp;
export type Theme<P> = ThemeProp | ThemeFn<P>;

export function apply<P>(theme: Theme<P>, props: P) {
  return typeof theme === "function" ? theme(props) : theme;
}

export function merge<P>(...themes: Theme<P>[]): ThemeFn<P> {
  return props => {
    const merged: ThemeProp = {};

    for (const theme of themes) {
      const themeProp = apply(theme, props);

      for (const prop in themeProp) {
        merged[prop] = concat(merged[prop], themeProp[prop]);
      }
    }

    return merged;
  };
}
