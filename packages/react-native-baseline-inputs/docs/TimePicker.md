# TimePicker

*See: packages/react-native-baseline-inputs/src/index.ts*

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>value</strong> <sup><em>required</em></sup> | `string \| Date` |  |
| <strong>cancelTextIOS</strong> | `string` | The text on the cancel button on iOS&lt;br&gt;&lt;br&gt;Default is &#x27;Cancel&#x27; |
| <strong>cancelTextStyle</strong> | `TextStyle` | A custom style for cancelTextIOS (Default is &#x27;Cancel&#x27;)&lt;br&gt;&lt;br&gt;Doesn&#x27;t work with the customCancelButtonIOS |
| <strong>confirmTextIOS</strong> | `string` | The text on the confirm button on iOS&lt;br&gt;&lt;br&gt;Default is &#x27;Confirm&#x27; |
| <strong>confirmTextStyle</strong> | `TextStyle` | A custom style for the confirmTextIOS (Default is &#x27;Confirm&#x27;)&lt;br&gt;&lt;br&gt;Doesn&#x27;t work with the customConfirmButtonIOS |
| <strong>containerStyle</strong> | `StyleProp&lt;ViewStyle&gt;` |  |
| <strong>contentContainerStyleIOS</strong> | `ViewStyle` | The style of the ReactNativeModal container on iOS |
| <strong>customCancelButtonIOS</strong> | `Element` | A custom component for the cancel button on iOS |
| <strong>customConfirmButtonIOS</strong> | `Element` | A custom component for the confirm button on iOS |
| <strong>customConfirmButtonWhileInteractingIOS</strong> | `Element` | A custom component for the confirm button on iOS that will be shown while user interacting with the date picker&lt;br&gt;&lt;br&gt;Doesn&#x27;t work without customConfirmButtonIOS |
| <strong>customDatePickerIOS</strong> | `Element` | A custom component that will replace the default DatePicker on iOS |
| <strong>customTitleContainerIOS</strong> | `Element` | A custom component for the title container on iOS |
| <strong>datePickerContainerStyleIOS</strong> | `ViewStyle` | The style of the container on iOS |
| <strong>datePickerModeAndroid</strong> | `&quot;default&quot; \| &quot;spinner&quot; \| &quot;calendar&quot;` | Toggles the date mode on Android between spinner and calendar views&lt;br&gt;&lt;br&gt;Default is &#x27;default&#x27; which shows either spinner or calendar based on Android version |
| <strong>dismissOnBackdropPressIOS</strong> | `boolean` | Dismiss the date-picker/time-picker when pressing on the backdrop (on iOS)?&lt;br&gt;&lt;br&gt;Default is true |
| <strong>hideTitleContainerIOS</strong> | `boolean` | Hide the title container on iOS&lt;br&gt;&lt;br&gt;Default is false |
| <strong>inputProps</strong> | `Partial&lt;StaticInputProps&gt;` |  |
| <strong>is24Hour</strong> | `boolean` | Sets mode to 24 hour time&lt;br&gt;If false, the picker shows an AM/PM chooser on Android&lt;br&gt;&lt;br&gt;Default is true |
| <strong>labelFormat</strong> | `string` |  |
| <strong>locale</strong> | `string` | The date picker locale. |
| <strong>maximumDate</strong> | `Date` | Maximum date the picker can go forward to |
| <strong>minimumDate</strong> | `Date` | Minimum date the picker can go back to |
| <strong>minuteInterval</strong> | `number` | enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)&lt;br&gt;The interval at which minutes can be selected.&lt;br&gt;@extends from DatePickerIOSProperties |
| <strong>mode</strong> | `&quot;date&quot; \| &quot;time&quot; \| &quot;datetime&quot;` | The mode of the picker&lt;br&gt;&lt;br&gt;Available modes are:&lt;br&gt;date - Shows Datepicker&lt;br&gt;time - Shows Timepicker&lt;br&gt;datetime - Shows a combined Date and Time Picker&lt;br&gt;&lt;br&gt;Default is &#x27;date&#x27; |
| <strong>neverDisableConfirmIOS</strong> | `boolean` | Never disable the confirm button on iOS, even on fling (see #82)&lt;br&gt;&lt;br&gt;Default is false |
| <strong>onBlur</strong> | `() &#x3D;&gt; void` |  |
| <strong>onChange</strong> | `(value: string) &#x3D;&gt; void` |  |
| <strong>onChangeDate</strong> | `(value: Date) &#x3D;&gt; void` |  |
| <strong>onDateChange</strong> | `(newDate: Date) &#x3D;&gt; void` | Date change handler.&lt;br&gt;This is called when the user changes the date or time in the UI.&lt;br&gt;The first and only argument is a Date object representing the new date and time.&lt;br&gt;@extends from DatePickerIOSProperties |
| <strong>onFocus</strong> | `() &#x3D;&gt; void` |  |
| <strong>onHideAfterConfirm</strong> | `(date: Date) &#x3D;&gt; void` | Called when the underlying modal finishes its&#x27; closing animation&lt;br&gt;after Confirm was pressed. |
| <strong>pickerRefCb</strong> | `(ref: any) &#x3D;&gt; void` | Ref function for the React Native DatePickerIOS or a customDatePickerIOS |
| <strong>reactNativeModalPropsIOS</strong> | `ModalProps` | Props for ReactNativeModal |
| <strong>style</strong> | `StyleProp&lt;ViewStyle&gt;` |  |
| <strong>timePickerModeAndroid</strong> | `&quot;default&quot; \| &quot;spinner&quot; \| &quot;clock&quot;` | Toggles the time mode on Android between spinner and clock views&lt;br&gt;&lt;br&gt;Default is &#x27;default&#x27; which shows either spinner or clock based on Android version |
| <strong>timeZoneOffsetInMinutes</strong> | `number` | Timezone offset in minutes.&lt;br&gt;By default, the date picker will use the device&#x27;s timezone. With this parameter, it is possible to force a certain timezone offset.&lt;br&gt;For instance, to show times in Pacific Standard Time, pass -7 * 60.&lt;br&gt;@extends from DatePickerIOSProperties |
| <strong>titleIOS</strong> | `string` | Title text for the Picker on iOS&lt;br&gt;&lt;br&gt;Default is &#x27;Pick a Date&#x27; |
| <strong>titleStyle</strong> | `TextStyle` | A custom style for the titleIOS (Default is &#x27;Pick a Date&#x27;) |
| <strong>valueFormat</strong> | `string` |  |
