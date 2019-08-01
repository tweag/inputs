import React from "react";
import { Formik, ErrorMessage } from "formik";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Input,
  IntegerInput,
  NumericInput,
  FloatInput,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Switch,
  Picker
} from "formik-native-inputs";

interface Values {
  input: string | null;
  integer: number | null;
  numeric: string | null;
  float: number | null;
  date: string | null;
  time: string | null;
  datetime: string | null;
  switch: boolean | null;
  picker: string | null;
}

const Item: React.FC<{ name: string; label: string }> = ({
  name,
  label,
  children
}) => (
  <View style={styles.item}>
    <Text style={styles.label}>{label}</Text>
    {children}
    <ErrorMessage name={name}>{msg => <Text>{msg}</Text>}</ErrorMessage>
  </View>
);

const initialValues = {
  input: null,
  integer: null,
  numeric: "5.3",
  float: null,
  date: null,
  time: null,
  datetime: null,
  switch: null,
  picker: null
};

const notEq = (rejectValue: any) => (value: any): any => {
  if (value === rejectValue) {
    return "invalid";
  }
};

const notBlank = notEq(null);

export default function App() {
  const onSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formik Inputs</Text>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {form => (
          <View>
            <View style={styles.debug}>
              <Text>Touched</Text>
              <Text>{JSON.stringify(form.touched, null, 2)}</Text>
              <Text>Errors</Text>
              <Text>{JSON.stringify(form.errors, null, 2)}</Text>
              <Text>Values</Text>
              <Text>{JSON.stringify(form.values, null, 2)}</Text>
            </View>

            <Item name="input" label="Input">
              <Input
                name="input"
                style={styles.input}
                validate={notBlank}
                invalidStyle={styles.invalid}
              />
            </Item>

            <Item name="integer" label="Integer">
              <IntegerInput
                name="integer"
                style={styles.input}
                placeholder="Hello"
                validate={notEq(2)}
              />
            </Item>

            <Item name="numeric" label="Numeric">
              <NumericInput
                name="numeric"
                style={styles.input}
                validate={notBlank}
              />
            </Item>

            <Item name="float" label="Float">
              <FloatInput
                name="float"
                style={styles.input}
                validate={notBlank}
              />
            </Item>

            <Item name="date" label="Date">
              <DatePicker
                name="date"
                style={styles.input}
                validate={notBlank}
              />
            </Item>

            <Item name="time" label="Time">
              <TimePicker
                name="time"
                style={styles.input}
                validate={notBlank}
              />
            </Item>

            <Item name="datetime" label="Date Time">
              <DateTimePicker
                name="datetime"
                style={styles.input}
                validate={notBlank}
              />
            </Item>

            <Item name="picker" label="Picker">
              <Picker
                name="picker"
                items={["Foo", "Bar"]}
                style={styles.input}
                validate={notEq("Foo")}
              />
            </Item>

            <Item name="switch" label="Switch">
              <Switch name="switch" validate={notEq(false)} />
            </Item>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  item: {
    marginBottom: 15
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    paddingLeft: 8,
    paddingRight: 8
  },
  invalid: {
    borderColor: "red"
  },
  debug: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#eee"
  }
});
