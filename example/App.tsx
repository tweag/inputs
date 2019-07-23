import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  Input,
  IntegerInput,
  DecimalInput,
  FloatInput,
  DateInput,
  DateTimeInput,
  Switch,
  Picker,
} from "../src/index";

interface Values {
  input: string | null;
  integer: number | null;
  decimal: string | null;
  float: number | null;
  date: string | null;
  datetime: string | null;
  switch: boolean | null;
  picker: string | null;
}

export default function App() {
  const [values, setValues] = useState<Values>({
    input: null,
    integer: null,
    decimal: null,
    float: null,
    date: null,
    datetime: null,
    switch: null,
    picker: null
  });

  const set = (name: keyof Values) => (value: any) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baseline Inputs</Text>

      <Input
        value={values.input}
        onChange={set("input")}
        style={styles.input}
        placeholder="Input"
      />

      <IntegerInput
        value={values.integer}
        onChange={set("integer")}
        style={styles.input}
        placeholder="Integer"
      />

      <DecimalInput
        value={values.decimal}
        onChange={set("decimal")}
        style={styles.input}
        placeholder="Decimal"
      />

      <FloatInput
        value={values.float}
        onChange={set("float")}
        style={styles.input}
        placeholder="Float"
      />

      <DateInput
        value={values.date}
        onChange={set("date")}
        style={styles.input}
        placeholder="Date"
      />

      <DateTimeInput
        value={values.datetime}
        onChange={set("datetime")}
        style={styles.input}
        placeholder="Date Time"
      />

      <Picker
        style
        value={values.picker}
        onChange={set("picker")}
        options={['Foo', 'Bar']}
      />

      <Switch
        value={values.switch}
        onChange={set("switch")}
        style={styles.input}
      />

      <Button title="Submit" onPress={onSubmit} />
    </View>
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
  input: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    borderColor: "#ddd",
    borderBottomWidth: 1
  }
});
