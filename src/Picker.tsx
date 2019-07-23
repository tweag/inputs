import React, { Component } from "react";
import {
  Picker as RNPicker,
  Platform,
  TextInput,
  StyleProp,
  ViewStyle,
  ActionSheetIOS
} from "react-native";

export interface PickerOption {
  key?: any;
  label: string;
  value: string;
}

export interface PickerProps {
  value: string | null;
  onChange: (value: string | null) => void;
  options: Array<PickerOption | string>;
  innerRef?: (instance: any) => void;
  style?: StyleProp<ViewStyle>;
}

const getProps = (option: PickerOption | string) => {
  if (typeof option === "string") {
    return { key: option, value: option, label: option };
  }

  const { value, label, key = value } = option;
  return { value, label, key };
};

const PickerAndroid: React.FC<PickerProps> = ({
  value,
  onChange,
  innerRef,
  options,
  style
}) => (
  <RNPicker ref={innerRef} selectedValue={value} onValueChange={onChange}>
    {options.map(option => (
      <RNPicker.Item {...getProps(option)} />
    ))}
  </RNPicker>
);

class PickerIOS extends Component<PickerProps> {
  private focus = () => {
    const options = this.props.options.map(getProps);

    ActionSheetIOS.showActionSheetWithOptions(
      { options: options.map(o => o.value) },
      index => {
        this.props.onChange(options[index] ? options[index].value : null);
      }
    );
  };

  public render() {
    const { value } = this.props;

    return (
      <TextInput
        editable={false}
        onTouchStart={this.focus}
        value={value === null ? "" : value}
      />
    );
  }
}

export const Picker = (props: PickerProps) => {
  if (Platform.OS === "ios") {
    return <PickerIOS {...props} />;
  }

  return <PickerAndroid {...props} />;
};
