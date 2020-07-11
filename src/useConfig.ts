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
  theme?: Theme<ExtraProps, Props>;
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

export function useConfig<P, T>(config: Config<P, T>, combinedProps: P & T): P {
  const { theme = THEME, useHook = HOOK, remove = REMOVE } = config;

  const props: any = {
    ...combinedProps,
    ...useHook(combinedProps)
  };

  for (const prop in theme) {
    const className = compile(theme[prop], props, props[prop]);

    if (className) {
      props[prop] = className;
    }
  }

  for (const prop of remove) {
    delete props[prop];
  }

  return props;
}
