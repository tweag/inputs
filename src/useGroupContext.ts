import { createContext, useContext } from "react";

export interface GroupContext<T = any> {
  value?: T;
  onChangeValue?: (value: T) => void;
}

const context = createContext<GroupContext | undefined>(undefined);

export const GroupContextProvider = context.Provider;

export function useGroupContext<T = any>(): GroupContext<T> | undefined {
  return useContext(context);
}
