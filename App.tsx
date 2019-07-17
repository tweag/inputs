import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./src/Input";
import IntegerInput from "./src/IntegerInput";
import FloatInput from "./src/FloatInput";

interface Values {
  string: string;
  integer: number;
  float: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({
    string: null,
    integer: null,
    float: null
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

      <FloatInput
        value={values.float}
        onChange={set("float")}
        style={styles.input}
        placeholder="FloatInput"
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
    borderBottomWidth: 1,
  },
  values: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#ddd"
  }
});
