import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
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
} from "react-native-baseline-inputs";

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

export default function App() {
  const [values, setValues] = useState<Values>({
    input: null,
    integer: null,
    numeric: "5.3",
    float: null,
    date: null,
    time: null,
    datetime: null,
    switch: null,
    picker: null
  });

  const set = (name: keyof Values) => (value: any) => {
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    console.log(nextValues);
  };

  const onSubmit = () => {
    console.log(values);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Baseline Inputs</Text>

      <Item label="Input">
        <Input
          value={values.input}
          onChange={set("input")}
          style={styles.input}
        />
      </Item>

      <Item label="Integer">
        <IntegerInput
          value={values.integer}
          onChange={set("integer")}
          style={styles.input}
          placeholder="Hello"
        />
      </Item>

      <Item label="Numeric">
        <NumericInput
          value={values.numeric}
          onChange={set("numeric")}
          style={styles.input}
        />
      </Item>

      <Item label="Float">
        <FloatInput
          value={values.float}
          onChange={set("float")}
          style={styles.input}
        />
      </Item>

      <Item label="Date">
        <DatePicker
          value={values.date}
          onChange={set("date")}
          style={styles.input}
        />
      </Item>

      <Item label="Time">
        <TimePicker
          value={values.time}
          onChange={set("time")}
          style={styles.input}
        />
      </Item>

      <Item label="Date Time">
        <DateTimePicker
          value={values.datetime}
          onChange={set("datetime")}
          style={styles.input}
        />
      </Item>

      <Item label="Picker">
        <Picker
          value={values.picker}
          onChange={set("picker")}
          items={["Foo", "Bar"]}
          style={styles.input}
        />
      </Item>

      <Item label="Switch">
        <Switch value={values.switch} onChange={set("switch")} />
      </Item>

      <Button title="Submit" onPress={onSubmit} />
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
  }
});
