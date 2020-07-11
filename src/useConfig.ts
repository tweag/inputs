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
  props?: Array<keyof ExtraProps | string>;
  theme?: Theme<ExtraProps, Props>;
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

export function useConfig<Props, ThemeProps>(
  config: Config<Props, ThemeProps>,
  props: Props & ThemeProps,
  remove: boolean = true
): Props {
  const result: any = { ...props };

  if (config.theme) {
    for (const prop in config.theme) {
      const spec = config.theme[prop];
      const className = compile(spec, props, (props as any)[prop]);
      if (className) result[prop] = className;
    }
  }

  if (remove && config.props) {
    for (const prop of config.props) {
      delete result[prop];
    }
  }

  return result;
}
