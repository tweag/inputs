# Modal

*See: packages/react-native-baseline-inputs/src/Modal.tsx*

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>body</strong> <sup><em>required</em></sup> | `ReactNode` |  |
| <strong>isVisible</strong> <sup><em>required</em></sup> | `boolean` |  |
| <strong>animated</strong> | `boolean` |  |
| <strong>animationType</strong> | `&quot;none&quot; \| &quot;slide&quot; \| &quot;fade&quot;` | The &#x60;animationType&#x60; prop controls how the modal animates.&lt;br&gt;&lt;br&gt;- &#x60;slide&#x60; slides in from the bottom&lt;br&gt;- &#x60;fade&#x60; fades into view&lt;br&gt;- &#x60;none&#x60; appears without an animation |
| <strong>backdropStyle</strong> | `StyleProp&lt;ViewStyle&gt;` |  |
| <strong>hardwareAccelerated</strong> | `boolean` | Controls whether to force hardware acceleration for the underlying window. |
| <strong>headerStyle</strong> | `StyleProp&lt;ViewStyle&gt;` |  |
| <strong>onDismiss</strong> | `() &#x3D;&gt; void` | The &#x60;onDismiss&#x60; prop allows passing a function that will be called once the modal has been dismissed. |
| <strong>onOrientationChange</strong> | `(event: NativeSyntheticEvent&lt;any&gt;) &#x3D;&gt; void` | The &#x60;onOrientationChange&#x60; callback is called when the orientation changes while the modal is being displayed.&lt;br&gt;The orientation provided is only &#x27;portrait&#x27; or &#x27;landscape&#x27;. This callback is also called on initial render, regardless of the current orientation. |
| <strong>onRequestClose</strong> | `() &#x3D;&gt; void` | The &#x60;onRequestClose&#x60; prop allows passing a function that will be called once the modal has been dismissed.&lt;br&gt;_On the Android platform, this is a required function._ |
| <strong>onShow</strong> | `(event: NativeSyntheticEvent&lt;any&gt;) &#x3D;&gt; void` | The &#x60;onShow&#x60; prop allows passing a function that will be called once the modal has been shown. |
| <strong>presentationStyle</strong> | `&quot;fullScreen&quot; \| &quot;pageSheet&quot; \| &quot;formSheet&quot; \| &quot;overFullScreen&quot;` | The &#x60;presentationStyle&#x60; determines the style of modal to show |
| <strong>style</strong> | `StyleProp&lt;ViewStyle&gt;` |  |
| <strong>supportedOrientations</strong> | `(&quot;portrait&quot; \| &quot;portrait-upside-down&quot; \| &quot;landscape&quot; \| &quot;landscape-left&quot; \| &quot;landscape-right&quot;)[]` | The &#x60;supportedOrientations&#x60; prop allows the modal to be rotated to any of the specified orientations.&lt;br&gt;On iOS, the modal is still restricted by what&#x27;s specified in your app&#x27;s Info.plist&#x27;s UISupportedInterfaceOrientations field. |
| <strong>transparent</strong> | `boolean` | The &#x60;transparent&#x60; prop determines whether your modal will fill the entire view.&lt;br&gt;Setting this to &#x60;true&#x60; will render the modal over a transparent background. |
| <strong>visible</strong> | `boolean` | The &#x60;visible&#x60; prop determines whether your modal is visible. |
