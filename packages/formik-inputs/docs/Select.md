# Select

## Props

| Name | Type | Description |
|------|------|-------------|
| <strong>name</strong> <sup><em>required</em></sup> | `string` |  |
| <strong>options</strong> <sup><em>required</em></sup> | `(string \| SelectOption)[]` |  |
| <strong>about</strong> | `string` |  |
| <strong>accessKey</strong> | `string` |  |
| <strong>aria-activedescendant</strong> | `string` | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. |
| <strong>aria-atomic</strong> | `boolean \| "false" \| "true"` | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. |
| <strong>aria-autocomplete</strong> | `"list" \| "none" \| "inline" \| "both"` | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br>presented if they are made. |
| <strong>aria-busy</strong> | `boolean \| "false" \| "true"` | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. |
| <strong>aria-checked</strong> | `boolean \| "false" \| "true" \| "mixed"` | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br>@see aria-pressed<br>@see aria-selected. |
| <strong>aria-colcount</strong> | `number` | Defines the total number of columns in a table, grid, or treegrid.<br>@see aria-colindex. |
| <strong>aria-colindex</strong> | `number` | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br>@see aria-colcount<br>@see aria-colspan. |
| <strong>aria-colspan</strong> | `number` | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-colindex<br>@see aria-rowspan. |
| <strong>aria-controls</strong> | `string` | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br>@see aria-owns. |
| <strong>aria-current</strong> | `boolean \| "step" \| "time" \| "false" \| "true" \| "page" \| "location" \| "date"` | Indicates the element that represents the current item within a container or set of related elements. |
| <strong>aria-describedby</strong> | `string` | Identifies the element (or elements) that describes the object.<br>@see aria-labelledby |
| <strong>aria-details</strong> | `string` | Identifies the element that provides a detailed, extended description for the object.<br>@see aria-describedby. |
| <strong>aria-disabled</strong> | `boolean \| "false" \| "true"` | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br>@see aria-hidden<br>@see aria-readonly. |
| <strong>aria-dropeffect</strong> | `"link" \| "none" \| "copy" \| "execute" \| "move" \| "popup"` | Indicates what functions can be performed when a dragged object is released on the drop target.<br>@deprecated in ARIA 1.1 |
| <strong>aria-errormessage</strong> | `string` | Identifies the element that provides an error message for the object.<br>@see aria-invalid<br>@see aria-describedby. |
| <strong>aria-expanded</strong> | `boolean \| "false" \| "true"` | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. |
| <strong>aria-flowto</strong> | `string` | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br>allows assistive technology to override the general default of reading in document source order. |
| <strong>aria-grabbed</strong> | `boolean \| "false" \| "true"` | Indicates an element's "grabbed" state in a drag-and-drop operation.<br>@deprecated in ARIA 1.1 |
| <strong>aria-haspopup</strong> | `boolean \| "dialog" \| "menu" \| "false" \| "true" \| "listbox" \| "tree" \| "grid"` | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. |
| <strong>aria-hidden</strong> | `boolean \| "false" \| "true"` | Indicates whether the element is exposed to an accessibility API.<br>@see aria-disabled. |
| <strong>aria-invalid</strong> | `boolean \| "false" \| "true" \| "grammar" \| "spelling"` | Indicates the entered value does not conform to the format expected by the application.<br>@see aria-errormessage. |
| <strong>aria-keyshortcuts</strong> | `string` | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. |
| <strong>aria-label</strong> | `string` | Defines a string value that labels the current element.<br>@see aria-labelledby. |
| <strong>aria-labelledby</strong> | `string` | Identifies the element (or elements) that labels the current element.<br>@see aria-describedby. |
| <strong>aria-level</strong> | `number` | Defines the hierarchical level of an element within a structure. |
| <strong>aria-live</strong> | `"off" \| "assertive" \| "polite"` | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. |
| <strong>aria-modal</strong> | `boolean \| "false" \| "true"` | Indicates whether an element is modal when displayed. |
| <strong>aria-multiline</strong> | `boolean \| "false" \| "true"` | Indicates whether a text box accepts multiple lines of input or only a single line. |
| <strong>aria-multiselectable</strong> | `boolean \| "false" \| "true"` | Indicates that the user may select more than one item from the current selectable descendants. |
| <strong>aria-orientation</strong> | `"horizontal" \| "vertical"` | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. |
| <strong>aria-owns</strong> | `string` | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br>@see aria-controls. |
| <strong>aria-placeholder</strong> | `string` | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br>A hint could be a sample value or a brief description of the expected format. |
| <strong>aria-posinset</strong> | `number` | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-setsize. |
| <strong>aria-pressed</strong> | `boolean \| "false" \| "true" \| "mixed"` | Indicates the current "pressed" state of toggle buttons.<br>@see aria-checked<br>@see aria-selected. |
| <strong>aria-readonly</strong> | `boolean \| "false" \| "true"` | Indicates that the element is not editable, but is otherwise operable.<br>@see aria-disabled. |
| <strong>aria-relevant</strong> | `"text" \| "additions" \| "additions text" \| "all" \| "removals"` | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br>@see aria-atomic. |
| <strong>aria-required</strong> | `boolean \| "false" \| "true"` | Indicates that user input is required on the element before a form may be submitted. |
| <strong>aria-roledescription</strong> | `string` | Defines a human-readable, author-localized description for the role of an element. |
| <strong>aria-rowcount</strong> | `number` | Defines the total number of rows in a table, grid, or treegrid.<br>@see aria-rowindex. |
| <strong>aria-rowindex</strong> | `number` | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br>@see aria-rowcount<br>@see aria-rowspan. |
| <strong>aria-rowspan</strong> | `number` | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-rowindex<br>@see aria-colspan. |
| <strong>aria-selected</strong> | `boolean \| "false" \| "true"` | Indicates the current "selected" state of various widgets.<br>@see aria-checked<br>@see aria-pressed. |
| <strong>aria-setsize</strong> | `number` | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-posinset. |
| <strong>aria-sort</strong> | `"none" \| "ascending" \| "descending" \| "other"` | Indicates if items in a table or grid are sorted in ascending or descending order. |
| <strong>aria-valuemax</strong> | `number` | Defines the maximum allowed value for a range widget. |
| <strong>aria-valuemin</strong> | `number` | Defines the minimum allowed value for a range widget. |
| <strong>aria-valuenow</strong> | `number` | Defines the current value for a range widget.<br>@see aria-valuetext. |
| <strong>aria-valuetext</strong> | `string` | Defines the human readable text alternative of aria-valuenow for a range widget. |
| <strong>autoCapitalize</strong> | `string` |  |
| <strong>autoComplete</strong> | `string` |  |
| <strong>autoCorrect</strong> | `string` |  |
| <strong>autoFocus</strong> | `boolean` |  |
| <strong>autoSave</strong> | `string` |  |
| <strong>className</strong> | `string` |  |
| <strong>color</strong> | `string` |  |
| <strong>contentEditable</strong> | `boolean` |  |
| <strong>contextMenu</strong> | `string` |  |
| <strong>dangerouslySetInnerHTML</strong> | `{ __html: string; }` |  |
| <strong>datatype</strong> | `string` |  |
| <strong>defaultChecked</strong> | `boolean` |  |
| <strong>defaultValue</strong> | `string \| string[]` |  |
| <strong>dir</strong> | `string` |  |
| <strong>disabled</strong> | `boolean` |  |
| <strong>draggable</strong> | `boolean` |  |
| <strong>form</strong> | `string` |  |
| <strong>hidden</strong> | `boolean` |  |
| <strong>id</strong> | `string` |  |
| <strong>inlist</strong> | `any` |  |
| <strong>innerRef</strong> | `(instance: FunctionComponent<SelectProps>) => void` |  |
| <strong>inputMode</strong> | `string` |  |
| <strong>is</strong> | `string` |  |
| <strong>itemID</strong> | `string` |  |
| <strong>itemProp</strong> | `string` |  |
| <strong>itemRef</strong> | `string` |  |
| <strong>itemScope</strong> | `boolean` |  |
| <strong>itemType</strong> | `string` |  |
| <strong>key</strong> | `ReactText` |  |
| <strong>lang</strong> | `string` |  |
| <strong>multiple</strong> | `boolean` |  |
| <strong>onAbort</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onAbortCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onAnimationEnd</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAnimationEndCapture</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAnimationIteration</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAnimationIterationCapture</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAnimationStart</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAnimationStartCapture</strong> | `(event: AnimationEvent<HTMLSelectElement>) => void` |  |
| <strong>onAuxClick</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onAuxClickCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onBeforeInput</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onBeforeInputCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onBlur</strong> | `(event: FocusEvent<HTMLSelectElement>) => void` |  |
| <strong>onBlurCapture</strong> | `(event: FocusEvent<HTMLSelectElement>) => void` |  |
| <strong>onCanPlay</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onCanPlayCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onCanPlayThrough</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onCanPlayThroughCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onChangeCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onClick</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onClickCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onCompositionEnd</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onCompositionEndCapture</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onCompositionStart</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onCompositionStartCapture</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onCompositionUpdate</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onCompositionUpdateCapture</strong> | `(event: CompositionEvent<HTMLSelectElement>) => void` |  |
| <strong>onContextMenu</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onContextMenuCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onCopy</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onCopyCapture</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onCut</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onCutCapture</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onDoubleClick</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onDoubleClickCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onDrag</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragEnd</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragEndCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragEnter</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragEnterCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragExit</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragExitCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragLeave</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragLeaveCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragOver</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragOverCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragStart</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDragStartCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDrop</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDropCapture</strong> | `(event: DragEvent<HTMLSelectElement>) => void` |  |
| <strong>onDurationChange</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onDurationChangeCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEmptied</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEmptiedCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEncrypted</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEncryptedCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEnded</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onEndedCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onError</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onErrorCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onFocus</strong> | `(event: FocusEvent<HTMLSelectElement>) => void` |  |
| <strong>onFocusCapture</strong> | `(event: FocusEvent<HTMLSelectElement>) => void` |  |
| <strong>onGotPointerCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onGotPointerCaptureCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onInput</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onInputCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onInvalid</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onInvalidCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyDown</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyDownCapture</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyPress</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyPressCapture</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyUp</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onKeyUpCapture</strong> | `(event: KeyboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onLoad</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadStart</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadStartCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadedData</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadedDataCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadedMetadata</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLoadedMetadataCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onLostPointerCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onLostPointerCaptureCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onMouseDown</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseDownCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseEnter</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseLeave</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseMove</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseMoveCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseOut</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseOutCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseOver</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseOverCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseUp</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onMouseUpCapture</strong> | `(event: MouseEvent<HTMLSelectElement, MouseEvent>) => void` |  |
| <strong>onPaste</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onPasteCapture</strong> | `(event: ClipboardEvent<HTMLSelectElement>) => void` |  |
| <strong>onPause</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPauseCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPlay</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPlayCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPlaying</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPlayingCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onPointerCancel</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerCancelCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerDown</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerDownCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerEnter</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerEnterCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerLeave</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerLeaveCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerMove</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerMoveCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerOut</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerOutCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerOver</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerOverCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerUp</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onPointerUpCapture</strong> | `(event: PointerEvent<HTMLSelectElement>) => void` |  |
| <strong>onProgress</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onProgressCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onRateChange</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onRateChangeCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onReset</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onResetCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onScroll</strong> | `(event: UIEvent<HTMLSelectElement>) => void` |  |
| <strong>onScrollCapture</strong> | `(event: UIEvent<HTMLSelectElement>) => void` |  |
| <strong>onSeeked</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSeekedCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSeeking</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSeekingCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSelect</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSelectCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onStalled</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onStalledCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSubmit</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onSubmitCapture</strong> | `(event: FormEvent<HTMLSelectElement>) => void` |  |
| <strong>onSuspend</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onSuspendCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onTimeUpdate</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onTimeUpdateCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onTouchCancel</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchCancelCapture</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchEnd</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchEndCapture</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchMove</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchMoveCapture</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchStart</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTouchStartCapture</strong> | `(event: TouchEvent<HTMLSelectElement>) => void` |  |
| <strong>onTransitionEnd</strong> | `(event: TransitionEvent<HTMLSelectElement>) => void` |  |
| <strong>onTransitionEndCapture</strong> | `(event: TransitionEvent<HTMLSelectElement>) => void` |  |
| <strong>onVolumeChange</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onVolumeChangeCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onWaiting</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onWaitingCapture</strong> | `(event: SyntheticEvent<HTMLSelectElement, Event>) => void` |  |
| <strong>onWheel</strong> | `(event: WheelEvent<HTMLSelectElement>) => void` |  |
| <strong>onWheelCapture</strong> | `(event: WheelEvent<HTMLSelectElement>) => void` |  |
| <strong>placeholder</strong> | `string` |  |
| <strong>prefix</strong> | `string` |  |
| <strong>property</strong> | `string` |  |
| <strong>radioGroup</strong> | `string` |  |
| <strong>ref</strong> | `LegacyRef<HTMLSelectElement>` |  |
| <strong>required</strong> | `boolean` |  |
| <strong>resource</strong> | `string` |  |
| <strong>results</strong> | `number` |  |
| <strong>role</strong> | `string` |  |
| <strong>security</strong> | `string` |  |
| <strong>size</strong> | `number` |  |
| <strong>slot</strong> | `string` |  |
| <strong>spellCheck</strong> | `boolean` |  |
| <strong>style</strong> | `CSSProperties` |  |
| <strong>suppressContentEditableWarning</strong> | `boolean` |  |
| <strong>suppressHydrationWarning</strong> | `boolean` |  |
| <strong>tabIndex</strong> | `number` |  |
| <strong>title</strong> | `string` |  |
| <strong>typeof</strong> | `string` |  |
| <strong>unselectable</strong> | `"on" \| "off"` |  |
| <strong>validate</strong> | `FieldValidator` |  |
| <strong>vocab</strong> | `string` |  |
