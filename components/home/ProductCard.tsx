import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { PropsWithChildren, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "@/constants/public/COLORS";

type Props = {
  product: ProductProps;
};

const ProductCard = ({ product }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const unconditionalStyles = StyleSheet.create({
    card: {
      width: 250,
      padding: 20,
      height: 370,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 0.2,
      shadowRadius: 30,
      elevation: 5, // For Android
      gap: 5,
    },
    imgCard: {
      width: "100%",
      aspectRatio: 1,
    },
    infoCard: {
      gap: 7,
    },

    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    price: {
      fontSize: 22,
      fontWeight: "bold",
    },
  });
  const conditionalStyles = (isLiked?: boolean) =>
    StyleSheet.create({
      heartBtn: {},
    });
  return (
    <View style={unconditionalStyles.card}>
      <View>
        <Image
          resizeMode="cover"
          style={unconditionalStyles.imgCard}
          source={{ uri: product.image }}
        />
      </View>

      <View style={unconditionalStyles.infoCard}>
        <Text numberOfLines={2} style={unconditionalStyles.title}>
          {product.title}
        </Text>
        <Text style={{ fontWeight: "500", color: COLORS.smTxt }}>
          {product.category}
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={unconditionalStyles.price}> ${product.price} </Text>
          <TouchableOpacity
            onPress={() => {
              setIsLiked((prev) => !prev);
            }}
          >
            {isLiked ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
