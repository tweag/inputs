import { createContext, useContext } from "react";
import { ThemeProp } from "./useConfig";
import { FieldProps } from "./useField";
import { HTMLProps } from "./utilities";

export interface GroupContext extends FieldProps, HTMLProps<HTMLInputElement> {
  name: string;
  type: "checkbox" | "radio";
  theme?: ThemeProp;
  value?: any;
  onChangeValue?: (value: any) => void;
}

const Context = createContext<GroupContext | undefined>(undefined);
Context.displayName = "Group";

export const GroupProvider = Context.Provider;

export function useGroupContext(): GroupContext {
  const group = useContext(Context);

  if (!group) {
    throw new Error("<Item /> must be rendered within a <Group />");
  }

  return group;
}
