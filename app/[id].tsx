import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ImageContainer from "@/components/product/ImageContainer";
import axios from "axios";
import Details from "@/components/product/Details";


type Params = {
  id: string;
};

const ProductPage = () => {
  const { id } = useLocalSearchParams<Params>();
  const [product, setProduct] = useState<ProductProps>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    title: "",
  });

  const getData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = await res.data;
      setProduct(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f4f7",
    },
  });
  const conditionalStyles = () => StyleSheet.create({});

  return (
    <ScrollView style={unconditionalStyles.container}>
      <ImageContainer img={product.image} />
      <Details product={product} />
    </ScrollView>
  );
};

export default ProductPage;
