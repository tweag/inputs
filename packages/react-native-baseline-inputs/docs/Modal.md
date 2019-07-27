# Modal

*See: packages/react-native-baseline-inputs/src/Modal.tsx*

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>body</strong> <sup><em>required</em></sup> | `ReactNode` |  |
| <strong>isVisible</strong> <sup><em>required</em></sup> | `boolean` |  |
| <strong>animated</strong> | `boolean` |  |
| <strong>animationType</strong> | `"none" \| "slide" \| "fade"` | The `animationType` prop controls how the modal animates.<br><br>- `slide` slides in from the bottom<br>- `fade` fades into view<br>- `none` appears without an animation |
| <strong>backdropStyle</strong> | `StyleProp<ViewStyle>` |  |
| <strong>hardwareAccelerated</strong> | `boolean` | Controls whether to force hardware acceleration for the underlying window. |
| <strong>headerStyle</strong> | `StyleProp<ViewStyle>` |  |
| <strong>onDismiss</strong> | `() => void` | The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed. |
| <strong>onOrientationChange</strong> | `(event: NativeSyntheticEvent<any>) => void` | The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.<br>The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation. |
| <strong>onRequestClose</strong> | `() => void` | The `onRequestClose` prop allows passing a function that will be called once the modal has been dismissed.<br>_On the Android platform, this is a required function._ |
| <strong>onShow</strong> | `(event: NativeSyntheticEvent<any>) => void` | The `onShow` prop allows passing a function that will be called once the modal has been shown. |
| <strong>presentationStyle</strong> | `"fullScreen" \| "pageSheet" \| "formSheet" \| "overFullScreen"` | The `presentationStyle` determines the style of modal to show |
| <strong>style</strong> | `StyleProp<ViewStyle>` |  |
| <strong>supportedOrientations</strong> | `("portrait" \| "portrait-upside-down" \| "landscape" \| "landscape-left" \| "landscape-right")[]` | The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.<br>On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. |
| <strong>transparent</strong> | `boolean` | The `transparent` prop determines whether your modal will fill the entire view.<br>Setting this to `true` will render the modal over a transparent background. |
| <strong>visible</strong> | `boolean` | The `visible` prop determines whether your modal is visible. |
