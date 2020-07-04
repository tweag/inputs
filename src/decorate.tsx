import * as React from "react";
import { FC } from "./types";

export interface DecoratorConfig<MoreProps> {
  displayNamePrefix?: string;
  omitProps?: Array<keyof MoreProps>;
}

const getName = (component: any) => {
  if (typeof component === "string") {
    return component;
  }

  return component?.displayName || component?.name || "Component";
};

export function createDecorator<MoreProps>({
  omitProps = [],
  displayNamePrefix = "Decorated"
}: DecoratorConfig<MoreProps> = {}) {
  return function decorate<Props>(
    Inner: FC<Props>,
    getProps: (props: Props & MoreProps) => Partial<Props> = () => ({})
  ) {
    const Outer: FC<Props & MoreProps> = props => {
      const inner = { ...props, ...getProps(props) };

      for (const key of omitProps) {
        delete inner[key];
      }

      return <Inner {...inner} />;
    };

    Outer.displayName = `${displayNamePrefix}${getName(Inner)}`;

    return Outer;
  };
}

export const decorate = createDecorator();
