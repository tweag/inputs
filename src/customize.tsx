import * as React from "react";
import { Theme, apply, ThemeProp } from "./theme";

export type Hook<P, T> = (props: P & T) => Partial<P>;

export interface Config<P, T> {
  name?: string;
  omit?: Array<keyof T | string>;
  theme?: Theme<P & T>;
  hook?: Hook<P, T>;
}

export function customize<P extends { theme?: ThemeProp }>(
  Inner: React.ComponentType<P>
) {
  return function create<T>(config: Config<P, T>) {
    const { name = "Custom", omit = [], theme, hook } = config;

    function useProps(props: P & T): P {
      const acc = hook ? { ...props, ...hook(props) } : { ...props };

      if (theme && !props.theme) {
        acc.theme = apply(theme, acc);
      }

      for (const prop of omit) {
        delete acc[prop as keyof T];
      }

      return acc;
    }

    function Outer(props: P & T) {
      return <Inner {...useProps(props)} />;
    }

    const innerName = Inner.displayName || Inner.name || "Field";
    Outer.displayName = name + innerName;

    return Outer;
  };
}
