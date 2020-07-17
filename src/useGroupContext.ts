import { createContext, useContext } from "react";
import { ThemeProp } from "./theme";

export interface GroupContext {
  value?: any[];
  theme?: ThemeProp;
  onChangeValue?: (value: any[]) => void;
}

const Context = createContext<GroupContext>({});
Context.displayName = "Group";

export const GroupProvider = Context.Provider;

export function useGroupContext(): GroupContext {
  return useContext(Context);
}
