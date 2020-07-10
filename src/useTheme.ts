interface ThemeClassNames {
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  legendClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface ClassName<Props = {}> {
  [key: string]: boolean | ((props: Props) => any);
}

export type Theme<ThemeProps = {}, Props = {}> = {
  props?: Array<keyof ThemeProps | string>;
} & {
  [K in keyof Props & keyof ThemeClassNames]?:
    | string
    | ClassName<Props & ThemeProps>;
};

function compileClassName<Props>(
  classNames: string | ClassName<Props> | undefined,
  props: Props,
  className: string = ""
): string | undefined {
  if (typeof classNames === "string") {
    className += ` ${classNames}`;
  } else if (classNames) {
    for (const key in classNames) {
      let test = classNames[key];
      if (typeof test === "function") test = test(props);
      if (test) className += ` ${key}`;
    }
  }

  return className.trim() || undefined;
}

export function useTheme<Props extends { [key: string]: any }, ThemeProps>(
  props: Props & ThemeProps,
  theme: Theme<ThemeProps, Props>,
  removeProps: boolean = true
): Props {
  const newProps = { ...props };
  const { props: themeProps = [], ...classNames } = theme;

  for (const prop in classNames) {
    const spec = (classNames as any)[prop];
    const className = compileClassName(spec, props, props[prop]);

    if (className) {
      (newProps as any)[prop] = className;
    }
  }

  if (removeProps) {
    for (const prop of themeProps) {
      delete newProps[prop];
    }
  }

  return newProps;
}
