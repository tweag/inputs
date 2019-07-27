# DatePicker

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>value</strong> <sup><em>required</em></sup> | `string \| Date` |  |
| <strong>cancelTextIOS</strong> | `string` | The text on the cancel button on iOS<br><br>Default is 'Cancel' |
| <strong>cancelTextStyle</strong> | `TextStyle` | A custom style for cancelTextIOS (Default is 'Cancel')<br><br>Doesn't work with the customCancelButtonIOS |
| <strong>confirmTextIOS</strong> | `string` | The text on the confirm button on iOS<br><br>Default is 'Confirm' |
| <strong>confirmTextStyle</strong> | `TextStyle` | A custom style for the confirmTextIOS (Default is 'Confirm')<br><br>Doesn't work with the customConfirmButtonIOS |
| <strong>containerStyle</strong> | `StyleProp<ViewStyle>` |  |
| <strong>contentContainerStyleIOS</strong> | `ViewStyle` | The style of the ReactNativeModal container on iOS |
| <strong>customCancelButtonIOS</strong> | `Element` | A custom component for the cancel button on iOS |
| <strong>customConfirmButtonIOS</strong> | `Element` | A custom component for the confirm button on iOS |
| <strong>customConfirmButtonWhileInteractingIOS</strong> | `Element` | A custom component for the confirm button on iOS that will be shown while user interacting with the date picker<br><br>Doesn't work without customConfirmButtonIOS |
| <strong>customDatePickerIOS</strong> | `Element` | A custom component that will replace the default DatePicker on iOS |
| <strong>customTitleContainerIOS</strong> | `Element` | A custom component for the title container on iOS |
| <strong>datePickerContainerStyleIOS</strong> | `ViewStyle` | The style of the container on iOS |
| <strong>datePickerModeAndroid</strong> | `"default" \| "spinner" \| "calendar"` | Toggles the date mode on Android between spinner and calendar views<br><br>Default is 'default' which shows either spinner or calendar based on Android version |
| <strong>dismissOnBackdropPressIOS</strong> | `boolean` | Dismiss the date-picker/time-picker when pressing on the backdrop (on iOS)?<br><br>Default is true |
| <strong>hideTitleContainerIOS</strong> | `boolean` | Hide the title container on iOS<br><br>Default is false |
| <strong>inputProps</strong> | `Partial<StaticInputProps>` |  |
| <strong>is24Hour</strong> | `boolean` | Sets mode to 24 hour time<br>If false, the picker shows an AM/PM chooser on Android<br><br>Default is true |
| <strong>labelFormat</strong> | `string` |  |
| <strong>locale</strong> | `string` | The date picker locale. |
| <strong>maximumDate</strong> | `Date` | Maximum date the picker can go forward to |
| <strong>minimumDate</strong> | `Date` | Minimum date the picker can go back to |
| <strong>minuteInterval</strong> | `number` | enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)<br>The interval at which minutes can be selected.<br>@extends from DatePickerIOSProperties |
| <strong>mode</strong> | `"date" \| "time" \| "datetime"` | The mode of the picker<br><br>Available modes are:<br>date - Shows Datepicker<br>time - Shows Timepicker<br>datetime - Shows a combined Date and Time Picker<br><br>Default is 'date' |
| <strong>neverDisableConfirmIOS</strong> | `boolean` | Never disable the confirm button on iOS, even on fling (see #82)<br><br>Default is false |
| <strong>onBlur</strong> | `() => void` |  |
| <strong>onChange</strong> | `(value: string) => void` |  |
| <strong>onChangeDate</strong> | `(value: Date) => void` |  |
| <strong>onDateChange</strong> | `(newDate: Date) => void` | Date change handler.<br>This is called when the user changes the date or time in the UI.<br>The first and only argument is a Date object representing the new date and time.<br>@extends from DatePickerIOSProperties |
| <strong>onFocus</strong> | `() => void` |  |
| <strong>onHideAfterConfirm</strong> | `(date: Date) => void` | Called when the underlying modal finishes its' closing animation<br>after Confirm was pressed. |
| <strong>pickerRefCb</strong> | `(ref: any) => void` | Ref function for the React Native DatePickerIOS or a customDatePickerIOS |
| <strong>reactNativeModalPropsIOS</strong> | `ModalProps` | Props for ReactNativeModal |
| <strong>style</strong> | `StyleProp<ViewStyle>` |  |
| <strong>timePickerModeAndroid</strong> | `"default" \| "spinner" \| "clock"` | Toggles the time mode on Android between spinner and clock views<br><br>Default is 'default' which shows either spinner or clock based on Android version |
| <strong>timeZoneOffsetInMinutes</strong> | `number` | Timezone offset in minutes.<br>By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset.<br>For instance, to show times in Pacific Standard Time, pass -7 * 60.<br>@extends from DatePickerIOSProperties |
| <strong>titleIOS</strong> | `string` | Title text for the Picker on iOS<br><br>Default is 'Pick a Date' |
| <strong>titleStyle</strong> | `TextStyle` | A custom style for the titleIOS (Default is 'Pick a Date') |
| <strong>valueFormat</strong> | `string` |  |
