import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { insertClient } from "../services/clientService";

export default function CreateClientScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Campo requerido", "El nombre es obligatorio.");
      return;
    }

    try {
      await insertClient({ name, phone, email, isSynced: false });
      Alert.alert("Cliente guardado");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Error", "No se pudo guardar el cliente.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Teléfono" value={phone} onChangeText={setPhone} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <Button title="Guardar Cliente" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
