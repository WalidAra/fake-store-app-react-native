import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {
  product: ProductProps;
};

const SecondaryProductCard = ({ product }: Props) => {
  const unconditionalStyles = StyleSheet.create({
    miniCard: {
      width: 110,
      height: 110,
      borderRadius: 10,
      padding: 15,
      backgroundColor: "white",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 0.2,
      shadowRadius: 30,
      elevation: 5, // For Android
    },
    img: {
      width: "100%",
      aspectRatio: 1,
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <View style={unconditionalStyles.miniCard}>
      <Image style={unconditionalStyles.img} source={{ uri: product.image }} />
    </View>
  );
};

export default SecondaryProductCard;
