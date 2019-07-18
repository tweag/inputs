import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Input,
  IntegerInput,
  DecimalInput,
  FloatInput,
  DateInput,
  DateTimeInput,
  BooleanInput
} from "./src";

interface Values {
  string: string | null;
  integer: number | null;
  decimal: string | null;
  float: number | null;
  date: string | null;
  datetime: string | null;
  boolean: boolean | null;
}

export default function App() {
  const [values, setValues] = useState<Values>({
    string: null,
    integer: null,
    decimal: null,
    float: null,
    date: null,
    datetime: null,
    boolean: null
  });

  const set = (name: keyof Values) => (value: any) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baseline Inputs</Text>

      <Input
        value={values.string}
        onChange={set("string")}
        style={styles.input}
        placeholder="Input"
      />

      <IntegerInput
        value={values.integer}
        onChange={set("integer")}
        style={styles.input}
        placeholder="IntegerInput"
      />

      <DecimalInput
        value={values.decimal}
        onChange={set("decimal")}
        style={styles.input}
        placeholder="DecimalInput"
      />

      <FloatInput
        value={values.float}
        onChange={set("float")}
        style={styles.input}
        placeholder="FloatInput"
      />

      <DateInput
        value={values.date}
        onChange={set("date")}
        style={styles.input}
        placeholder="DateInput"
      />

      <DateTimeInput
        value={values.datetime}
        onChange={set("datetime")}
        style={styles.input}
        placeholder="DateTimeInput"
      />

      <BooleanInput
        value={values.boolean}
        onChange={set("boolean")}
        style={styles.switch}
      />

      <Text style={styles.values}>{JSON.stringify(values, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    height: 40,
    padding: 5,
    marginBottom: 20,
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  switch: {
    marginBottom: 20
  },
  values: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
