import React from "react";
import { Formik, Field } from "formik";
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
} from "../src/index";

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

const Item: React.FC<{ label: string }> = ({ label, children }) => (
  <View style={styles.item}>
    <Text style={styles.label}>{label}</Text>
    {children}
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

const notBlank = (value: any) => {
  console.log("VALIDATE", value);

  if (!value) {
    console.log("ERROR", value);
    return "must not be blank";
  }
};

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

            <Item label="Input">
              <Input name="input" style={styles.input} validate={notBlank} />
            </Item>

            <Item label="Integer">
              <IntegerInput
                name="integer"
                style={styles.input}
                placeholder="Hello"
              />
            </Item>

            <Item label="Numeric">
              <NumericInput name="numeric" style={styles.input} />
            </Item>

            <Item label="Float">
              <FloatInput name="float" style={styles.input} />
            </Item>

            <Item label="Date">
              <DatePicker name="date" style={styles.input} />
            </Item>

            <Item label="Time">
              <TimePicker name="time" style={styles.input} />
            </Item>

            <Item label="Date Time">
              <DateTimePicker name="datetime" style={styles.input} />
            </Item>

            <Item label="Picker">
              <Picker
                name="picker"
                items={["Foo", "Bar"] as any}
                style={styles.input}
              />
            </Item>

            <Item label="Switch">
              <Switch name="switch" />
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
    minHeight: 36,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    paddingHorizontal: 8
  },
  debug: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#eee"
  }
});
