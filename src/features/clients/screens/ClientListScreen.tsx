import React from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from "react-native";
import { useClients } from "../hooks/useClients";

export default function ClientListScreen({ navigation }: any) {
  const { clients, loading } = useClients();

  return (
    <View style={styles.container}>
      <Button title="Agregar Cliente" onPress={() => navigation.navigate("Nuevo Cliente")} />
      {loading ? (
        <ActivityIndicator style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={clients}
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.phone}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={{ marginTop: 20 }}>No hay clientes</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  item: { marginBottom: 15, borderBottomWidth: 1, paddingBottom: 10 },
  name: { fontWeight: "bold" },
});
