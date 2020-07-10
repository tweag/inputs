import { createContext, useContext } from "react";
import { HTMLProps } from "./types";

export interface GroupContext<T> extends HTMLProps<HTMLInputElement> {
  type: "checkbox" | "radio";
  value?: T;
  onChangeValue?: (value: T) => void;
}

const context = createContext<GroupContext<any> | undefined>(undefined);
context.displayName = "Group";

export const GroupProvider = context.Provider;

export function useGroup<T = any>(): GroupContext<T> {
  const group = useContext(context);

  if (!group) {
    throw new Error("<Item /> must be rendered within a <Group />");
  }

  return group;
}
