# FloatInput

*See: packages/formik-inputs/src/index.ts*

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>name</strong> <sup><em>required</em></sup> | `string` |  |
| <strong>about</strong> | `string` |  |
| <strong>accept</strong> | `string` |  |
| <strong>accessKey</strong> | `string` |  |
| <strong>alt</strong> | `string` |  |
| <strong>aria-activedescendant</strong> | `string` | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
| <strong>aria-atomic</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
| <strong>aria-autocomplete</strong> | `&quot;list&quot; \| &quot;none&quot; \| &quot;inline&quot; \| &quot;both&quot;` | Indicates whether inputting text could trigger display of one or more predictions of the user&#x27;s intended value for an input and specifies how predictions would be&lt;br&gt;presented if they are made. |
| <strong>aria-busy</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
| <strong>aria-checked</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot; \| &quot;mixed&quot;` | Indicates the current &quot;checked&quot; state of checkboxes, radio buttons, and other widgets.&lt;br&gt;@see aria-pressed&lt;br&gt;@see aria-selected. |
| <strong>aria-colcount</strong> | `number` | Defines the total number of columns in a table, grid, or treegrid.&lt;br&gt;@see aria-colindex. |
| <strong>aria-colindex</strong> | `number` | Defines an element&#x27;s column index or position with respect to the total number of columns within a table, grid, or treegrid.&lt;br&gt;@see aria-colcount&lt;br&gt;@see aria-colspan. |
| <strong>aria-colspan</strong> | `number` | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.&lt;br&gt;@see aria-colindex&lt;br&gt;@see aria-rowspan. |
| <strong>aria-controls</strong> | `string` | Identifies the element (or elements) whose contents or presence are controlled by the current element.&lt;br&gt;@see aria-owns. |
| <strong>aria-current</strong> | `boolean \| &quot;step&quot; \| &quot;time&quot; \| &quot;false&quot; \| &quot;true&quot; \| &quot;page&quot; \| &quot;location&quot; \| &quot;date&quot;` | Indicates the element that represents the current item within a container or set of related elements. |
| <strong>aria-describedby</strong> | `string` | Identifies the element (or elements) that describes the object.&lt;br&gt;@see aria-labelledby |
| <strong>aria-details</strong> | `string` | Identifies the element that provides a detailed, extended description for the object.&lt;br&gt;@see aria-describedby. |
| <strong>aria-disabled</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.&lt;br&gt;@see aria-hidden&lt;br&gt;@see aria-readonly. |
| <strong>aria-dropeffect</strong> | `&quot;link&quot; \| &quot;none&quot; \| &quot;copy&quot; \| &quot;execute&quot; \| &quot;move&quot; \| &quot;popup&quot;` | Indicates what functions can be performed when a dragged object is released on the drop target.&lt;br&gt;@deprecated in ARIA 1.1 |
| <strong>aria-errormessage</strong> | `string` | Identifies the element that provides an error message for the object.&lt;br&gt;@see aria-invalid&lt;br&gt;@see aria-describedby. |
| <strong>aria-expanded</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
| <strong>aria-flowto</strong> | `string` | Identifies the next element (or elements) in an alternate reading order of content which, at the user&#x27;s discretion,&lt;br&gt;allows assistive technology to override the general default of reading in document source order. |
| <strong>aria-grabbed</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates an element&#x27;s &quot;grabbed&quot; state in a drag-and-drop operation.&lt;br&gt;@deprecated in ARIA 1.1 |
| <strong>aria-haspopup</strong> | `boolean \| &quot;dialog&quot; \| &quot;menu&quot; \| &quot;false&quot; \| &quot;true&quot; \| &quot;listbox&quot; \| &quot;tree&quot; \| &quot;grid&quot;` | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
| <strong>aria-hidden</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates whether the element is exposed to an accessibility API.&lt;br&gt;@see aria-disabled. |
| <strong>aria-invalid</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot; \| &quot;grammar&quot; \| &quot;spelling&quot;` | Indicates the entered value does not conform to the format expected by the application.&lt;br&gt;@see aria-errormessage. |
| <strong>aria-keyshortcuts</strong> | `string` | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
| <strong>aria-label</strong> | `string` | Defines a string value that labels the current element.&lt;br&gt;@see aria-labelledby. |
| <strong>aria-labelledby</strong> | `string` | Identifies the element (or elements) that labels the current element.&lt;br&gt;@see aria-describedby. |
| <strong>aria-level</strong> | `number` | Defines the hierarchical level of an element within a structure. |
| <strong>aria-live</strong> | `&quot;off&quot; \| &quot;assertive&quot; \| &quot;polite&quot;` | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| <strong>aria-modal</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates whether an element is modal when displayed. |
| <strong>aria-multiline</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates whether a text box accepts multiple lines of input or only a single line. |
| <strong>aria-multiselectable</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates that the user may select more than one item from the current selectable descendants. |
| <strong>aria-orientation</strong> | `&quot;horizontal&quot; \| &quot;vertical&quot;` | Indicates whether the element&#x27;s orientation is horizontal, vertical, or unknown/ambiguous. |
| <strong>aria-owns</strong> | `string` | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship&lt;br&gt;between DOM elements where the DOM hierarchy cannot be used to represent the relationship.&lt;br&gt;@see aria-controls. |
| <strong>aria-placeholder</strong> | `string` | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.&lt;br&gt;A hint could be a sample value or a brief description of the expected format. |
| <strong>aria-posinset</strong> | `number` | Defines an element&#x27;s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.&lt;br&gt;@see aria-setsize. |
| <strong>aria-pressed</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot; \| &quot;mixed&quot;` | Indicates the current &quot;pressed&quot; state of toggle buttons.&lt;br&gt;@see aria-checked&lt;br&gt;@see aria-selected. |
| <strong>aria-readonly</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates that the element is not editable, but is otherwise operable.&lt;br&gt;@see aria-disabled. |
| <strong>aria-relevant</strong> | `&quot;text&quot; \| &quot;additions&quot; \| &quot;additions text&quot; \| &quot;all&quot; \| &quot;removals&quot;` | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.&lt;br&gt;@see aria-atomic. |
| <strong>aria-required</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates that user input is required on the element before a form may be submitted. |
| <strong>aria-roledescription</strong> | `string` | Defines a human-readable, author-localized description for the role of an element. |
| <strong>aria-rowcount</strong> | `number` | Defines the total number of rows in a table, grid, or treegrid.&lt;br&gt;@see aria-rowindex. |
| <strong>aria-rowindex</strong> | `number` | Defines an element&#x27;s row index or position with respect to the total number of rows within a table, grid, or treegrid.&lt;br&gt;@see aria-rowcount&lt;br&gt;@see aria-rowspan. |
| <strong>aria-rowspan</strong> | `number` | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.&lt;br&gt;@see aria-rowindex&lt;br&gt;@see aria-colspan. |
| <strong>aria-selected</strong> | `boolean \| &quot;false&quot; \| &quot;true&quot;` | Indicates the current &quot;selected&quot; state of various widgets.&lt;br&gt;@see aria-checked&lt;br&gt;@see aria-pressed. |
| <strong>aria-setsize</strong> | `number` | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.&lt;br&gt;@see aria-posinset. |
| <strong>aria-sort</strong> | `&quot;none&quot; \| &quot;ascending&quot; \| &quot;descending&quot; \| &quot;other&quot;` | Indicates if items in a table or grid are sorted in ascending or descending order. |
| <strong>aria-valuemax</strong> | `number` | Defines the maximum allowed value for a range widget. |
| <strong>aria-valuemin</strong> | `number` | Defines the minimum allowed value for a range widget. |
| <strong>aria-valuenow</strong> | `number` | Defines the current value for a range widget.&lt;br&gt;@see aria-valuetext. |
| <strong>aria-valuetext</strong> | `string` | Defines the human readable text alternative of aria-valuenow for a range widget. |
| <strong>autoCapitalize</strong> | `string` |  |
| <strong>autoComplete</strong> | `string` |  |
| <strong>autoCorrect</strong> | `string` |  |
| <strong>autoFocus</strong> | `boolean` |  |
| <strong>autoSave</strong> | `string` |  |
| <strong>capture</strong> | `string \| boolean` |  |
| <strong>checked</strong> | `boolean` |  |
| <strong>className</strong> | `string` |  |
| <strong>color</strong> | `string` |  |
| <strong>contentEditable</strong> | `boolean` |  |
| <strong>contextMenu</strong> | `string` |  |
| <strong>crossOrigin</strong> | `string` |  |
| <strong>dangerouslySetInnerHTML</strong> | `{ __html: string; }` |  |
| <strong>datatype</strong> | `string` |  |
| <strong>defaultChecked</strong> | `boolean` |  |
| <strong>defaultValue</strong> | `string \| string[]` |  |
| <strong>dir</strong> | `string` |  |
| <strong>disabled</strong> | `boolean` |  |
| <strong>draggable</strong> | `boolean` |  |
| <strong>form</strong> | `string` |  |
| <strong>formAction</strong> | `string` |  |
| <strong>formEncType</strong> | `string` |  |
| <strong>formMethod</strong> | `string` |  |
| <strong>formNoValidate</strong> | `boolean` |  |
| <strong>formTarget</strong> | `string` |  |
| <strong>height</strong> | `ReactText` |  |
| <strong>hidden</strong> | `boolean` |  |
| <strong>id</strong> | `string` |  |
| <strong>inlist</strong> | `any` |  |
| <strong>innerRef</strong> | `(instance: FunctionComponent&lt;CustomInputProps&lt;&quot;input&quot;, number&gt;&gt;) &#x3D;&gt; void` |  |
| <strong>inputMode</strong> | `string` |  |
| <strong>is</strong> | `string` |  |
| <strong>itemID</strong> | `string` |  |
| <strong>itemProp</strong> | `string` |  |
| <strong>itemRef</strong> | `string` |  |
| <strong>itemScope</strong> | `boolean` |  |
| <strong>itemType</strong> | `string` |  |
| <strong>key</strong> | `ReactText` |  |
| <strong>lang</strong> | `string` |  |
| <strong>list</strong> | `string` |  |
| <strong>max</strong> | `ReactText` |  |
| <strong>maxLength</strong> | `number` |  |
| <strong>min</strong> | `ReactText` |  |
| <strong>minLength</strong> | `number` |  |
| <strong>multiple</strong> | `boolean` |  |
| <strong>onAbort</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onAbortCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationEnd</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationEndCapture</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationIteration</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationIterationCapture</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationStart</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAnimationStartCapture</strong> | `(event: AnimationEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onAuxClick</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onAuxClickCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onBeforeInput</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onBeforeInputCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onBlur</strong> | `(event: FocusEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onBlurCapture</strong> | `(event: FocusEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCanPlay</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onCanPlayCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onCanPlayThrough</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onCanPlayThroughCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onChangeCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onClick</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onClickCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionEnd</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionEndCapture</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionStart</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionStartCapture</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionUpdate</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCompositionUpdateCapture</strong> | `(event: CompositionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onContextMenu</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onContextMenuCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onCopy</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCopyCapture</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCut</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onCutCapture</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDoubleClick</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onDoubleClickCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onDrag</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragEnd</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragEndCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragEnter</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragEnterCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragExit</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragExitCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragLeave</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragLeaveCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragOver</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragOverCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragStart</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDragStartCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDrop</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDropCapture</strong> | `(event: DragEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onDurationChange</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onDurationChangeCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEmptied</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEmptiedCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEncrypted</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEncryptedCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEnded</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onEndedCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onError</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onErrorCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onFocus</strong> | `(event: FocusEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onFocusCapture</strong> | `(event: FocusEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onGotPointerCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onGotPointerCaptureCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onInput</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onInputCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onInvalid</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onInvalidCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyDown</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyDownCapture</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyPress</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyPressCapture</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyUp</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onKeyUpCapture</strong> | `(event: KeyboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onLoad</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadStart</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadStartCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadedData</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadedDataCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadedMetadata</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLoadedMetadataCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onLostPointerCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onLostPointerCaptureCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseDown</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseDownCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseEnter</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseLeave</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseMove</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseMoveCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseOut</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseOutCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseOver</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseOverCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseUp</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onMouseUpCapture</strong> | `(event: MouseEvent&lt;HTMLInputElement, MouseEvent&gt;) &#x3D;&gt; void` |  |
| <strong>onPaste</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPasteCapture</strong> | `(event: ClipboardEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPause</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPauseCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPlay</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPlayCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPlaying</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPlayingCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerCancel</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerCancelCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerDown</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerDownCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerEnter</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerEnterCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerLeave</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerLeaveCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerMove</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerMoveCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerOut</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerOutCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerOver</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerOverCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerUp</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onPointerUpCapture</strong> | `(event: PointerEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onProgress</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onProgressCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onRateChange</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onRateChangeCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onReset</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onResetCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onScroll</strong> | `(event: UIEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onScrollCapture</strong> | `(event: UIEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onSeeked</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSeekedCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSeeking</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSeekingCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSelect</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSelectCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onStalled</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onStalledCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSubmit</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onSubmitCapture</strong> | `(event: FormEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onSuspend</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onSuspendCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onTimeUpdate</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onTimeUpdateCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchCancel</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchCancelCapture</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchEnd</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchEndCapture</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchMove</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchMoveCapture</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchStart</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTouchStartCapture</strong> | `(event: TouchEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTransitionEnd</strong> | `(event: TransitionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onTransitionEndCapture</strong> | `(event: TransitionEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onVolumeChange</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onVolumeChangeCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onWaiting</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onWaitingCapture</strong> | `(event: SyntheticEvent&lt;HTMLInputElement, Event&gt;) &#x3D;&gt; void` |  |
| <strong>onWheel</strong> | `(event: WheelEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>onWheelCapture</strong> | `(event: WheelEvent&lt;HTMLInputElement&gt;) &#x3D;&gt; void` |  |
| <strong>pattern</strong> | `string` |  |
| <strong>placeholder</strong> | `string` |  |
| <strong>prefix</strong> | `string` |  |
| <strong>property</strong> | `string` |  |
| <strong>radioGroup</strong> | `string` |  |
| <strong>readOnly</strong> | `boolean` |  |
| <strong>ref</strong> | `LegacyRef&lt;HTMLInputElement&gt;` |  |
| <strong>required</strong> | `boolean` |  |
| <strong>resource</strong> | `string` |  |
| <strong>results</strong> | `number` |  |
| <strong>role</strong> | `string` |  |
| <strong>security</strong> | `string` |  |
| <strong>size</strong> | `number` |  |
| <strong>slot</strong> | `string` |  |
| <strong>spellCheck</strong> | `boolean` |  |
| <strong>src</strong> | `string` |  |
| <strong>step</strong> | `ReactText` |  |
| <strong>style</strong> | `CSSProperties` |  |
| <strong>suppressContentEditableWarning</strong> | `boolean` |  |
| <strong>suppressHydrationWarning</strong> | `boolean` |  |
| <strong>tabIndex</strong> | `number` |  |
| <strong>title</strong> | `string` |  |
| <strong>type</strong> | `string` |  |
| <strong>typeof</strong> | `string` |  |
| <strong>unselectable</strong> | `&quot;on&quot; \| &quot;off&quot;` |  |
| <strong>validate</strong> | `FieldValidator` |  |
| <strong>vocab</strong> | `string` |  |
| <strong>width</strong> | `ReactText` |  |
