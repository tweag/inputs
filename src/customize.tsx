import * as React from "react";

interface ClassNameProps {
  className?: string;
  fieldClassName?: string;
  fieldSetClassName?: string;
  labelClassName?: string;
  legendClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface ClassName<Props> {
  [key: string]: boolean | ((props: Props) => any);
}

export type Theme<Props, ExtraProps = {}> = {
  [K in keyof Props & keyof ClassNameProps]?:
    | string
    | ClassName<Props & ExtraProps>;
} & {
  [key: string]: string | ClassName<Props & ExtraProps>;
};

export interface Config<Props, ExtraProps = {}> {
  remove?: string[];
  theme?: Theme<Props, ExtraProps>;
  useHook?: (props: Props & ExtraProps) => Partial<Props>;
}

function compile<Props>(
  classNames: string | ClassName<Props>,
  props: Props,
  className: string = ""
): string {
  if (typeof classNames === "string") {
    className += ` ${classNames}`;
  } else {
    for (const key in classNames) {
      let test = classNames[key];
      if (typeof test === "function") test = test(props);
      if (test) className += ` ${key}`;
    }
  }

  return className.trim();
}

const THEME: Theme<any, any> = {};
const HOOK = () => ({});
const REMOVE: string[] = [];

export function customize<P>(Inner: React.ComponentType<P>) {
  return function create<T = {}>(config: Config<P, T>) {
    const { theme = THEME, useHook = HOOK, remove = REMOVE } = config;

    function Outer(props: P & T) {
      const innerProps: any = { ...props, ...useHook(props) };

      for (const prop in theme) {
        const className = compile(theme[prop], props, innerProps[prop]);
        if (className) {
          innerProps[prop] = className;
        }
      }

      for (const prop of remove) {
        delete innerProps[prop];
      }

      return <Inner {...innerProps} />;
    }

    const name = Inner.displayName || Inner.name || "Field";
    Outer.displayName = `Custom${name}`;

    return Outer;
  };
}
