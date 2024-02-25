import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "@/constants/public/COLORS";
import axios from "axios";
import MedProductCard from "@/components/home/all/MedProductCard";

const categories: string[] = [
  "men's clothes",
  "women's clothes",
  "electronics",
  "jewelery",
];

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.whiteBoardL,
    },
    ImportantTitle: {
      width: "100%",
      backgroundColor: COLORS.primary,
      padding: 20,
    },
  });
  const conditionalStyles = (activeCategory?: string, item?: string) =>
    StyleSheet.create({
      categoryBtn: {},

      categoryText: {
        color: activeCategory === item ? COLORS.whiteBoardL : COLORS.smTxt,
        fontSize: 14,
        fontWeight: "bold",
      },
    });

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

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
    <ScrollView style={unconditionalStyles.container}>
      <View style={unconditionalStyles.ImportantTitle}>
        <FlatList
          horizontal
          contentContainerStyle={{ columnGap: 20 }}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={(item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(item.item);
                }}
                style={conditionalStyles(activeCategory, item.item).categoryBtn}
              >
                <Text
                  style={
                    conditionalStyles(activeCategory, item.item).categoryText
                  }
                >
                  {item.item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"red"} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          products.map((product) => (
            <MedProductCard key={product.id + "med-card"} product={product} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default AllProducts;
