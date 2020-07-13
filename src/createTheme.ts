interface ClassNameProps {
  className?: string;
  fieldClassName?: string;
  fieldSetClassName?: string;
  labelClassName?: string;
  legendClassName?: string;
  helpClassName?: string;
  errorClassName?: string;
}

export interface ClassName<P> {
  [key: string]: boolean | ((props: P) => any);
}

export type Theme<P, T = {}> = {
  [K in keyof P & keyof ClassNameProps]?: string | ClassName<P & T>;
} & {
  [key: string]: string | ClassName<P & T>;
};

export function createTheme<P, T>(theme: Theme<P, T>) {
  return (props: P & T): Partial<P> => {
    const classNames: any = {};

    for (const prop in theme) {
      let values = theme[prop];
      let className: string = (props as any)[prop] || "";

      if (typeof values === "string") {
        values = { [values]: true };
      }

      for (const key in values) {
        let test = values[key];
        if (typeof test === "function") test = test(props);
        if (test && className) className += " ";
        if (test) className += key;
      }

      if (className) {
        classNames[prop] = className;
      }
    }

    return classNames;
  };
}
