import { ClassName, Theme } from "./types";

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

export function applyTheme<Props extends { [key: string]: any }, ThemeProps>(
  props: Props & ThemeProps,
  theme: Theme<ThemeProps, Props>
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

  for (const prop of themeProps) {
    delete newProps[prop];
  }

  return newProps;
}
