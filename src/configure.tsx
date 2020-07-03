import * as React from "react";
import { Input as BaseInput } from "./Input";
import { InputProps, Config } from "./types";

export function withProps<Props, ExtraProps>(
  Inner: React.ComponentType<Props>,
  displayName: string,
  getProps: (props: Props & ExtraProps) => Props
): React.FC<Props & ExtraProps> {
  const Outer: React.FC<Props & ExtraProps> = props => {
    return <Inner {...getProps(props)} />;
  };

  if (Inner.displayName) {
    Outer.displayName = `${displayName}${Inner.displayName}`;
  }

  return Outer;
}

export function configure<ExtraProps>(config: Config<ExtraProps>) {
  const Input = withProps<InputProps, ExtraProps>(
    BaseInput,
    config.displayName,
    props => {
      return config.getInputProps(props);
    }
  );

  return { Input };
}
