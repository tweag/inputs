import { Component, createRef } from "react";
import { TextInput, TextInputProps } from "react-native";

export type BaseTextInputProps = Omit<
  TextInputProps,
  "value" | "onChange" | "onChangeText"
>;

export interface CustomInputProps<T> extends BaseTextInputProps {
  value: T;
  onChange: (value: T) => void;
}

export class InputComponent<P = {}, S = {}> extends Component<P, S> {
  protected inputRef = createRef<TextInput>();

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
