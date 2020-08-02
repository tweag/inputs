<h1 align="center">react-baseline-inputs</h1>

<div align="center">

![Build](https://github.com/rzane/react-baseline-inputs/workflows/Build/badge.svg)
![Version](https://img.shields.io/npm/v/react-baseline-inputs)
![Size](https://img.shields.io/bundlephobia/minzip/react-baseline-inputs)
![License](https://img.shields.io/npm/l/react-baseline-inputs)

</div>

A set of helpful input components that take the burden out of building forms with React.

## Components

<!-- components -->

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

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| field          | `FormField<boolean>`    | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

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

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| value          | `Value`                 | ✓        |
| field          | `FormField<Value[]>`    | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

### FieldSet

#### Props

| Name            | Type             | Required |
| --------------- | ---------------- | -------- |
| field           | `FormField<any>` | ✓        |
| legend          | `ReactNode`      | ✓        |
| help            | `ReactNode`      | ✗        |
| className       | `string`         | ✗        |
| legendClassName | `string`         | ✗        |
| helpClassName   | `string`         | ✗        |
| errorClassName  | `string`         | ✗        |

### FileInput

#### Props

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| field          | `FormField<File>`       | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

### FileListInput

#### Props

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| field          | `FormField<FileList>`   | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

### Input

#### Props

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| type           | `InputType`             | ✗        |
| field          | `FormField<string>`     | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

### Radio

#### Props

| Name           | Type                    | Required |
| -------------- | ----------------------- | -------- |
| value          | `T`                     | ✓        |
| field          | `FormField<T>`          | ✓        |
| innerRef       | `Ref<HTMLInputElement>` | ✗        |
| label          | `ReactNode`             | ✓        |
| help           | `ReactNode`             | ✗        |
| append         | `ReactNode`             | ✗        |
| prepend        | `ReactNode`             | ✗        |
| className      | `string`                | ✗        |
| inputClassName | `string`                | ✗        |
| labelClassName | `string`                | ✗        |
| helpClassName  | `string`                | ✗        |
| errorClassName | `string`                | ✗        |
| size           | `FieldSize`             | ✗        |
| inline         | `boolean`               | ✗        |
| condensed      | `boolean`               | ✗        |

### Select

#### Props

| Name           | Type                     | Required |
| -------------- | ------------------------ | -------- |
| placeholder    | `string`                 | ✗        |
| field          | `FormField<string>`      | ✓        |
| innerRef       | `Ref<HTMLSelectElement>` | ✗        |
| label          | `ReactNode`              | ✓        |
| help           | `ReactNode`              | ✗        |
| append         | `ReactNode`              | ✗        |
| prepend        | `ReactNode`              | ✗        |
| className      | `string`                 | ✗        |
| inputClassName | `string`                 | ✗        |
| labelClassName | `string`                 | ✗        |
| helpClassName  | `string`                 | ✗        |
| errorClassName | `string`                 | ✗        |
| size           | `FieldSize`              | ✗        |
| inline         | `boolean`                | ✗        |
| condensed      | `boolean`                | ✗        |

### Switch

#### Props

| Name           | Type                     | Required |
| -------------- | ------------------------ | -------- |
| field          | `FormField<boolean>`     | ✓        |
| innerRef       | `Ref<HTMLButtonElement>` | ✗        |
| label          | `ReactNode`              | ✓        |
| help           | `ReactNode`              | ✗        |
| append         | `ReactNode`              | ✗        |
| prepend        | `ReactNode`              | ✗        |
| className      | `string`                 | ✗        |
| inputClassName | `string`                 | ✗        |
| labelClassName | `string`                 | ✗        |
| helpClassName  | `string`                 | ✗        |
| errorClassName | `string`                 | ✗        |
| size           | `FieldSize`              | ✗        |
| inline         | `boolean`                | ✗        |
| condensed      | `boolean`                | ✗        |

### TextArea

#### Props

| Name           | Type                       | Required |
| -------------- | -------------------------- | -------- |
| field          | `FormField<string>`        | ✓        |
| innerRef       | `Ref<HTMLTextAreaElement>` | ✗        |
| label          | `ReactNode`                | ✓        |
| help           | `ReactNode`                | ✗        |
| append         | `ReactNode`                | ✗        |
| prepend        | `ReactNode`                | ✗        |
| className      | `string`                   | ✗        |
| inputClassName | `string`                   | ✗        |
| labelClassName | `string`                   | ✗        |
| helpClassName  | `string`                   | ✗        |
| errorClassName | `string`                   | ✗        |
| size           | `FieldSize`                | ✗        |
| inline         | `boolean`                  | ✗        |
| condensed      | `boolean`                  | ✗        |

<!-- end of components -->
