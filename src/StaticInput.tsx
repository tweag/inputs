import React from "react";
import { StaticInputProps } from "./types";
import { TouchableWithoutFeedback, View, TextInput } from "react-native";

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
