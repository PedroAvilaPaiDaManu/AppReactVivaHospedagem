import { useEffect, useState } from "react";
import { View, Text, Button, Alert, FlatList, ImageBackground } from "react-native";
import { router } from "expo-router";

import { Input } from "@/components/Input";
import { Product } from "@/components/Product";

import {
  useProductDatabase,
  ProductDatabase,
} from "@/database/useProductDatabase";

export default function Index() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductDatabase[]>([]);

  const productDatabase = useProductDatabase();

  async function create() {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert("Telefone", "O telefone precisa ser um número!");
      }

      const response = await productDatabase.create({
        name,
        telefone: Number(quantity),
      });

      Alert.alert("O cliente foi cadastrado com o ID: " + response.insertedRowId);
    } catch (error) {
      console.log(error);
    }
  }

  async function update() {
    try {
      if (isNaN(Number(quantity))) {
        return Alert.alert("Telefone", "O telefone precisa ser um número!");
      }

      const response = await productDatabase.update({
        id: Number(id),
        name,
        telefone: Number(quantity),
      });

      Alert.alert("Nome atualizado!");
    } catch (error) {
      console.log(error);
    }
  }

  async function list() {
    try {
      const response = await productDatabase.searchByName(search);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function remove(id: number) {
    try {
      await productDatabase.remove(id);
      await list();
    } catch (error) {
      console.log(error);
    }
  }

  function details(item: ProductDatabase) {
    setId(String(item.id));
    setName(item.name);
    setQuantity(String(item.telefone));
  }

  async function handleSave() {
    if (id) {
      update();
    } else {
      create();
    }

    setId("");
    setName("");
    setQuantity("");
    await list();
  }

  useEffect(() => {
    list();
  }, [search]);

  return (
    <ImageBackground 
      source={{ uri: "https://yt3.ggpht.com/ytc/AKedOLS-YodxmpaXcbUp6DGuhcTj2AJowoc-FtgqDZo-=s900-c-k-c0x00ffffff-no-rj" }} 
      style={{ flex: 1, padding: 32, gap: 16 }}
      resizeMode="contain"
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: 'blue' }}>
        Viva Hospedagem
      </Text>

      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input
        placeholder="Telefone"
        onChangeText={setQuantity}
        value={quantity}
      />

      <Button title="Salvar" onPress={handleSave} />

      <Input placeholder="Pesquisar" onChangeText={setSearch} />

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Product
            data={item}
            onPress={() => details(item)}
            onDelete={() => remove(item.id)}
            onOpen={() => router.navigate(`/details/${item.id}`)}
          />
        )}
        contentContainerStyle={{ gap: 16 }}
      />
    </ImageBackground>
  );
}
