import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "@/constants/public/COLORS";
import axios from "axios";
import ProductCard from "./ProductCard";

const MainSlider = () => {
  const unconditionalStyles = StyleSheet.create({});
  const conditionalStyles = (regBtnLabel?: string) => StyleSheet.create({});
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
        height: 380,
        justifyContent: "center",
        alignItems: "center",
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
          contentContainerStyle={{ columnGap: 20 }}
          keyExtractor={(item) => String(item.id)}
          data={products}
          renderItem={(item) => {
            return <ProductCard product={item.item} />;
          }}
        />
      )}
    </View>
  );
};

export default MainSlider;
