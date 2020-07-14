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

export type Theme<P> = ThemeProp | (<T extends P>(props: T) => ThemeProp);

export function apply<P>(theme: Theme<P>, props: P) {
  return typeof theme === "function" ? theme(props) : theme;
}

export function merge<P>(...themes: Theme<P>[]): Theme<P> {
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
