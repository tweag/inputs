<h1 align="center">react-baseline-inputs</h1>

<div align="center">

![Build](https://github.com/rzane/react-baseline-inputs/workflows/Build/badge.svg)
![Version](https://img.shields.io/npm/v/react-baseline-inputs)
![Size](https://img.shields.io/bundlephobia/minzip/react-baseline-inputs)
![License](https://img.shields.io/npm/l/react-baseline-inputs)

</div>

A set of helpful input components that take the burden out of building forms with React.

## Components

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Checkbox](#checkbox)
  - [Example](#example)
  - [Props](#props)
- [CheckboxItem](#checkboxitem)
  - [Example](#example-1)
  - [Props](#props-1)
- [FieldSet](#fieldset)
  - [Props](#props-2)
- [FileInput](#fileinput)
  - [Props](#props-3)
- [FileListInput](#filelistinput)
  - [Props](#props-4)
- [Input](#input)
  - [Props](#props-5)
- [Radio](#radio)
  - [Props](#props-6)
- [Select](#select)
  - [Props](#props-7)
- [Switch](#switch)
  - [Props](#props-8)
- [TextArea](#textarea)
  - [Props](#props-9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- START components -->

### Checkbox

Manages the state of a boolean value using a checkbox.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<Checkbox
  label="I agree"
  help="Did you read all 7,000 lines?"
  field={useField(form, "confirmation")}
/>
```

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| field          | FormField<boolean>    | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### CheckboxItem

Manages the state of a boolean value using a checkbox.

In addition to the props listed below, this component accepts
all props for an HTML input.

#### Example

```jsx
<Checkbox
  label="I agree"
  help="Did you read all 7,000 lines?"
  field={useField(form, "confirmation")}
/>
```

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| value          | Value                 | ✓        |                                                        |
| field          | FormField<Value[]>    | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### FieldSet

#### Props

| Name            | Type           | Required | Description |
| --------------- | -------------- | -------- | ----------- |
| field           | FormField<any> | ✓        |             |
| legend          | ReactNode      | ✓        |             |
| help            | ReactNode      | ✗        |             |
| className       | string         | ✗        |             |
| legendClassName | string         | ✗        |             |
| helpClassName   | string         | ✗        |             |
| errorClassName  | string         | ✗        |             |

### FileInput

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| field          | FormField<File>       | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### FileListInput

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| field          | FormField<FileList>   | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### Input

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| type           | InputType             | ✗        |                                                        |
| field          | FormField<string>     | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### Radio

#### Props

| Name           | Type                  | Required | Description                                            |
| -------------- | --------------------- | -------- | ------------------------------------------------------ |
| value          | T                     | ✓        |                                                        |
| field          | FormField<T>          | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode             | ✓        | Content to appear in the label                         |
| help           | ReactNode             | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode             | ✗        | Content to render before the input                     |
| append         | ReactNode             | ✗        | Content to render after the input                      |
| className      | string                | ✗        | An additional class name for the field                 |
| inputClassName | string                | ✗        | An additional class name for the input                 |
| labelClassName | string                | ✗        | An additional class name for the label                 |
| helpClassName  | string                | ✗        | An additional class name for the help                  |
| errorClassName | string                | ✗        | An additional class name for the error                 |
| size           | FieldSize             | ✗        | Appends a class name to all elements                   |
| inline         | boolean               | ✗        | Appends a class name to all elements                   |
| condensed      | boolean               | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLInputElement> | ✗        | A ref to the input element                             |

### Select

#### Props

| Name           | Type                   | Required | Description                                            |
| -------------- | ---------------------- | -------- | ------------------------------------------------------ |
| placeholder    | string                 | ✗        |                                                        |
| field          | FormField<string>      | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode              | ✓        | Content to appear in the label                         |
| help           | ReactNode              | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode              | ✗        | Content to render before the input                     |
| append         | ReactNode              | ✗        | Content to render after the input                      |
| className      | string                 | ✗        | An additional class name for the field                 |
| inputClassName | string                 | ✗        | An additional class name for the input                 |
| labelClassName | string                 | ✗        | An additional class name for the label                 |
| helpClassName  | string                 | ✗        | An additional class name for the help                  |
| errorClassName | string                 | ✗        | An additional class name for the error                 |
| size           | FieldSize              | ✗        | Appends a class name to all elements                   |
| inline         | boolean                | ✗        | Appends a class name to all elements                   |
| condensed      | boolean                | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLSelectElement> | ✗        | A ref to the input element                             |

### Switch

#### Props

| Name           | Type                   | Required | Description                                            |
| -------------- | ---------------------- | -------- | ------------------------------------------------------ |
| field          | FormField<boolean>     | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode              | ✓        | Content to appear in the label                         |
| help           | ReactNode              | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode              | ✗        | Content to render before the input                     |
| append         | ReactNode              | ✗        | Content to render after the input                      |
| className      | string                 | ✗        | An additional class name for the field                 |
| inputClassName | string                 | ✗        | An additional class name for the input                 |
| labelClassName | string                 | ✗        | An additional class name for the label                 |
| helpClassName  | string                 | ✗        | An additional class name for the help                  |
| errorClassName | string                 | ✗        | An additional class name for the error                 |
| size           | FieldSize              | ✗        | Appends a class name to all elements                   |
| inline         | boolean                | ✗        | Appends a class name to all elements                   |
| condensed      | boolean                | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLButtonElement> | ✗        | A ref to the input element                             |

### TextArea

#### Props

| Name           | Type                     | Required | Description                                            |
| -------------- | ------------------------ | -------- | ------------------------------------------------------ |
| field          | FormField<string>        | ✓        | See [@stackup/form](https://github.com/rzane/form)     |
| label          | ReactNode                | ✓        | Content to appear in the label                         |
| help           | ReactNode                | ✗        | Extra help info that will be rendered within the label |
| prepend        | ReactNode                | ✗        | Content to render before the input                     |
| append         | ReactNode                | ✗        | Content to render after the input                      |
| className      | string                   | ✗        | An additional class name for the field                 |
| inputClassName | string                   | ✗        | An additional class name for the input                 |
| labelClassName | string                   | ✗        | An additional class name for the label                 |
| helpClassName  | string                   | ✗        | An additional class name for the help                  |
| errorClassName | string                   | ✗        | An additional class name for the error                 |
| size           | FieldSize                | ✗        | Appends a class name to all elements                   |
| inline         | boolean                  | ✗        | Appends a class name to all elements                   |
| condensed      | boolean                  | ✗        | Appends a class name to all elements                   |
| innerRef       | Ref<HTMLTextAreaElement> | ✗        | A ref to the input element                             |

<!-- END components -->
