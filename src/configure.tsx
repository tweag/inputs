import * as React from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import { Checkbox } from "./Checkbox";
import { CheckboxItem } from "./CheckboxItem";
import { TextArea } from "./TextArea";
import { Radio } from "./Radio";
import { FieldSet } from "./FieldSet";
import {
  FC,
  Config,
  Components,
  InputProps,
  SelectProps,
  CheckboxProps,
  CheckboxItemProps,
  TextAreaProps,
  RadioProps,
  FieldSetProps
} from "./types";

export function withProps<Props, ExtraProps>(
  Inner: FC<Props>,
  displayName: string,
  getProps: (props: Props & ExtraProps) => Props
): FC<Props & ExtraProps> {
  const Outer: FC<Props & ExtraProps> = props => {
    return <Inner {...getProps(props)} />;
  };

  if (Inner.displayName) {
    Outer.displayName = `${displayName}${Inner.displayName}`;
  }

  return Outer;
}

export function configure<ExtraProps>(
  config: Config<ExtraProps>
): Components<ExtraProps> {
  return {
    Input: withProps<InputProps, ExtraProps>(
      Input,
      config.displayName,
      config.getInputProps
    ),
    Select: withProps<SelectProps, ExtraProps>(
      Select,
      config.displayName,
      config.getSelectProps
    ),
    Checkbox: withProps<CheckboxProps, ExtraProps>(
      Checkbox,
      config.displayName,
      config.getCheckboxProps
    ),
    CheckboxItem: withProps<CheckboxItemProps<any>, ExtraProps>(
      CheckboxItem,
      config.displayName,
      config.getCheckboxItemProps
    ),
    TextArea: withProps<TextAreaProps, ExtraProps>(
      TextArea,
      config.displayName,
      config.getTextAreaProps
    ),
    Radio: withProps<RadioProps<any>, ExtraProps>(
      Radio,
      config.displayName,
      config.getRadioProps
    ),
    FieldSet: withProps<FieldSetProps, ExtraProps>(
      FieldSet,
      config.displayName,
      config.getFieldSetProps
    )
  };
}
