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

export type ThemeFn<P> = (props: P) => ThemeProp;
export type Theme<P> = ThemeProp | ThemeFn<P>;
export type Hook<P, T> = (props: P & T) => Partial<P>;

export interface Config<P, T> {
  omit?: Array<keyof T | string>;
  hook?: Hook<P, T>;
  theme?: Theme<P & T>;
}

function apply<P>(theme: Theme<P>, props: P) {
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

export function useConfig<P extends { theme?: ThemeProp }, T>(
  config: Config<P, T>,
  props: P & T
): P {
  const { omit = [], theme, hook } = config;
  const acc = hook ? { ...props, ...hook(props) } : { ...props };

  if (theme && !props.theme) {
    acc.theme = apply(theme, acc);
  }

  for (const prop of omit) {
    delete acc[prop as keyof T];
  }

  return acc;
}
