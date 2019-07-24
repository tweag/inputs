import React, { createRef, Component } from "react";
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
  private modalRef = createRef<Modal>();

  public focus() {
    if (this.modalRef.current) {
      this.modalRef.current.open();
    }
  }

  public blur() {
    if (this.modalRef.current) {
      this.modalRef.current.close();
    }
  }

  private handleChange = (value: T) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  public render() {
    const {
      value,
      items,
      children,
      inputProps = {},
      modalProps = {},
      onChange: _onChange,
      ...props
    } = this.props;

    const pickerItems = items.map(normalizePickerItem);
    const picker = (
      <RNPicker
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
      <Modal ref={this.modalRef} render={() => picker} {...modalProps}>
        {modal => (
          <StaticInput
            value={getDisplayValue(pickerItems, value)}
            onPress={modal.open}
            children={children}
            {...inputProps}
          />
        )}
      </Modal>
    );
  }
}
