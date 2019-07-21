import { Component, createRef } from "react";
import { TextInput } from "react-native";

export type InputAttributes<T> = Omit<
  T,
  "value" | "onChange" | "onChangeText" | "onChangeValue"
>;

export type CustomInputProps<T, V> = InputAttributes<T> & {
  value: V;
  onChange: (value: V) => void;
};

export class InputComponent<P = {}, S = {}> extends Component<P, S> {
  public inputRef = createRef<any>();

  public focus() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  public blur() {
    if (this.inputRef.current) {
      this.inputRef.current.blur();
    }
  }

  public clear() {
    if (this.inputRef.current) {
      this.inputRef.current.clear();
    }
  }

  public setNativeProps(nativeProps: object) {
    if (this.inputRef.current) {
      this.inputRef.current.setNativeProps(nativeProps);
    }
  }
}
