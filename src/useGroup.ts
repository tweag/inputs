import { createContext, useContext } from "react";
import { HTMLProps } from "./utilities";

export interface GroupContext extends HTMLProps<HTMLInputElement> {
  type: "checkbox" | "radio";
  value?: any;
  onChangeValue?: (value: any) => void;
}

const context = createContext<GroupContext | undefined>(undefined);
context.displayName = "Group";

export const GroupProvider = context.Provider;

export function useGroup(): GroupContext {
  const group = useContext(context);

  if (!group) {
    throw new Error("<Item /> must be rendered within a <Group />");
  }

  return group;
}
