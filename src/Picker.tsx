import React, { Component } from "react";
import { Picker as RNPicker, Platform } from "react-native";
import { Modal } from "./Modal";
import { StaticInput } from "./StaticInput";
import { PickerProps, PickerItemObject, PickerItem } from "./types";

function normalizePickerItem<T>(item: PickerItem<T>): PickerItemObject<T> {
  if (typeof item === "string" || typeof item === "number") {
    return {
      key: item,
      value: item,
      label: item.toString()
    } as PickerItemObject<T>;
  }

  return item as PickerItemObject<T>;
}

function getDisplayValue<T>(items: Array<PickerItemObject<T>>, value: T) {
  const selectedItem = items.find(item => item.value === value);
  return selectedItem ? selectedItem.label : "";
}

export class Picker<T> extends Component<PickerProps<T>> {
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
  }

  private handleChange = (value: T) => {
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
          value={getDisplayValue(pickerItems, value)}
          {...inputProps}
        />
      </Modal>
    );
  }
}
