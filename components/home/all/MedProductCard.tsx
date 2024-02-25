import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  product: ProductProps;
};

const MedProductCard = ({ product }: Props) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const unconditionalStyles = StyleSheet.create({
    miniCard: {
      marginBottom: 10,
      width: "48%",
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

    imgCard: {
      width: "100%",
      aspectRatio: 1,
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
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <Pressable
      style={unconditionalStyles.miniCard}
      onPress={() => {
        router.push(`/${product.id}`);
      }}
    >
      <View style={{ width: "100%" , gap:5 }}>
        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
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

        <View>
          <Image
            resizeMode="cover"
            style={unconditionalStyles.imgCard}
            source={{ uri: product.image }}
          />
        </View>

        <Text style={unconditionalStyles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={unconditionalStyles.price} numberOfLines={1}>
          ${product.price}
        </Text>
      </View>
    </Pressable>
  );
};

export default MedProductCard;
