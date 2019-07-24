import React, { createRef, Component } from "react";
import {
  TouchableWithoutFeedback,
  View,
  TextInput,
  TextInputProps
} from "react-native";

/**
 * Is the value `null` or `undefined`?
 */
export const isNil = (value: any): value is null | undefined => {
  return value === null || typeof value === "undefined";
};

/**
 * Delegate events to text inputs.
 */
export class InputComponent<P = {}, S = {}> extends Component<P, S> {
  protected inputRef = createRef<any>();

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

  public setNativeProps(props: object) {
    if (this.inputRef.current) {
      this.inputRef.current.setNativeProps(props);
    }
  }
}

/**
 * Render a fake input that fires an event when pressed.
 */
export interface StaticInputProps extends TextInputProps {
  onPress: () => void;
}

export const StaticInput: React.FC<StaticInputProps> = ({
  onPress,
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View pointerEvents="box-only">
      {children ? children : <TextInput editable={false} {...props} />}
    </View>
  </TouchableWithoutFeedback>
);
