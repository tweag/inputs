import * as React from "react";
import { FC } from "./types";

export interface DecoratorConfig<MoreProps> {
  displayNamePrefix?: string;
  omitProps?: Array<keyof MoreProps>;
}

function getName(component: any): string {
  if (typeof component === "string") {
    return component;
  }

  return component?.displayName || component?.name || "Component";
}

function merge<T, R>(props: T & R, merge: Partial<T>, omit: Array<keyof R>): T {
  const result = { ...props, ...merge };
  for (const key of omit) {
    delete result[key];
  }
  return result;
}

export function createDecorator<MoreProps>({
  omitProps = [],
  displayNamePrefix = "Decorated"
}: DecoratorConfig<MoreProps> = {}) {
  return function decorate<Props>(
    Inner: FC<Props>,
    getProps: (props: Props & MoreProps) => Partial<Props> = () => ({})
  ) {
    const Outer: FC<Props & MoreProps> = props => {
      return <Inner {...merge(props, getProps(props), omitProps)} />;
    };

    Outer.displayName = `${displayNamePrefix}${getName(Inner)}`;

    return Outer;
  };
}

export const decorate = createDecorator();
