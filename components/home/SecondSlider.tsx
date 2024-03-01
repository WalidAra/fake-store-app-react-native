import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SecondaryProductCard from "./SecondaryProductCard";

const SecondSlider = () => {
  const unconditionalStyles = StyleSheet.create({});
  const conditionalStyles = () => StyleSheet.create({});
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const products = await res.data;
      setProducts(products);
      return products;
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 160,
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : isError ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          style={{ flexBasis: 1, height: 370 }}
          horizontal
          contentContainerStyle={{ columnGap: 15 }}
          keyExtractor={(item) => String(item.id)}
          data={products}
          renderItem={(item) => {
            return <SecondaryProductCard product={item.item} />;
          }}
        />
      )}
    </View>
  );
};

export default SecondSlider;
