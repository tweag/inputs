import * as React from "react";

export interface Config<P, T = {}> {
  name?: string;
  omit?: string[];
  theme?: (props: P & T) => Partial<P>;
  useHook?: (props: P & T) => Partial<P>;
}

export function customize<P>(Inner: React.ComponentType<P>) {
  return function create<T = {}>(config: Config<P, T>) {
    const {
      name = "Custom",
      omit = [],
      theme = () => ({}),
      useHook = () => ({})
    } = config;

    function useProps(props: P & T): P {
      let acc: any = { ...props, ...useHook(props) };
      acc = { ...acc, ...theme(acc) };

      for (const prop of omit) {
        delete acc[prop];
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
