import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import {
  Input,
  IntegerInput,
  DecimalInput,
  FloatInput,
  DateInput,
  DateTimeInput,
  Switch,
  Picker
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Baseline Inputs</Text>

      <Item label="Input">
        <Input value={values.input} onChange={set("input")} />
      </Item>

      <Item label="Integer">
        <IntegerInput value={values.integer} onChange={set("integer")} />
      </Item>

      <Item label="Decimal">
        <DecimalInput value={values.decimal} onChange={set("decimal")} />
      </Item>

      <Item label="Float">
        <FloatInput value={values.float} onChange={set("float")} />
      </Item>

      <Item label="Date">
        <DateInput value={values.date} onChange={set("date")} />
      </Item>

      <Item label="Date Time">
        <DateTimeInput value={values.datetime} onChange={set("datetime")} />
      </Item>

      <Item label="Picker">
        <Picker
          value={values.picker}
          onChange={set("picker")}
          options={["Foo", "Bar"]}
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
    marginBottom: 20,
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  label: {
    fontWeight: "bold"
  }
});
