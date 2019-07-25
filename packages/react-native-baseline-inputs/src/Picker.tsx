import * as React from "react";
import { Picker as RNPicker, Platform } from "react-native";
import isEqual from "fast-deep-equal";
import { Modal } from "./Modal";
import { StaticInput } from "./StaticInput";
import { PickerProps, PickerItemObject, PickerItem } from "./types";

const normalizePickerItem = (item: PickerItem): PickerItemObject => {
  if (typeof item === "string" || typeof item === "number") {
    return {
      key: item,
      value: item,
      label: item.toString()
    };
  }

  return item;
};

function getSelectedLabel(items: PickerItemObject[], value: any) {
  const selectedItem = items.find(item => isEqual(item.value, value));
  return selectedItem ? selectedItem.label : "";
}

export class Picker extends React.Component<PickerProps> {
  public state = {
    isVisible: false
  };

  public focus() {
    this.setState({ isVisible: true });
  }

  public blur() {
    this.setState({ isVisible: false });
  }

  private handlePress = () => {
    this.focus();

    if (this.props.onModalOpen) {
      this.props.onModalOpen();
    }
  };

  private handleChange = (value: any) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  private handleClose = () => {
    this.blur();

    if (this.props.onModalClose) {
      this.props.onModalClose();
    }
  };

  public render() {
    const { isVisible } = this.state;
    const {
      value,
      items,
      style,
      children,
      pickerStyle,
      inputProps = {},
      modalStyle,
      modalProps = {},
      onChange: _onChange,
      onModalClose: _onModalOpen,
      onModalOpen: _onModalClose,
      ...props
    } = this.props;

    const pickerItems = items.map(normalizePickerItem);
    const picker = (
      <RNPicker
        style={pickerStyle}
        selectedValue={value}
        onValueChange={this.handleChange}
        {...props}
      >
        {pickerItems.map(props => (
          <RNPicker.Item {...props} />
        ))}
      </RNPicker>
    );

    return Platform.OS === "android" ? (
      picker
    ) : (
      <Modal
        body={picker}
        style={modalStyle}
        isVisible={isVisible}
        onRequestClose={this.handleClose}
        {...modalProps}
      >
        <StaticInput
          style={style}
          onPress={this.handlePress}
          children={children}
          value={getSelectedLabel(pickerItems, value)}
          {...inputProps}
        />
      </Modal>
    );
  }
}
