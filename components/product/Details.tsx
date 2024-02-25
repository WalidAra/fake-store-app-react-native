import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import COLORS from "@/constants/public/COLORS";
import Styles from "@/styles/GeneralStyles";

type Props = {
  product: ProductProps;
};

const sizes: number[] = [7, 7.5, 8, 8.5, 9, 9.5];

const Details = ({ product }: Props) => {
  const [isActive, setIsActive] = useState<number>(7.5);
  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.whiteBoardL,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      paddingHorizontal: 20,
      gap: 10,
      paddingVertical: 10,
    },

    title: {
      fontSize: 20,
      fontWeight: "bold",
    },

    price: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });
  const conditionalStyles = (item?: string, activeItem?: string) =>
    StyleSheet.create({
      size: {
        borderWidth: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9999,
        borderColor: item === activeItem ? COLORS.primary : COLORS.smTxt,
        backgroundColor:
          item === activeItem ? COLORS.primary : COLORS.whiteBoardL,
        width: 40,
        height: 40,
      },

      sizeText: {
        color: item === activeItem ? COLORS.whiteBoardL : COLORS.smTxt,
      },
    });
  return (
    <View style={unconditionalStyles.container}>
      <Text style={unconditionalStyles.title}> {product.title} </Text>

      <View style={{ width: "100%", flexDirection: "row", gap: 20 }}>
        <Text style={Styles.unconditionalStyles.smallText}>
          {product.category}
        </Text>
        <Text style={Styles.unconditionalStyles.smallText}>
          Rating : {product.rating.rate}
        </Text>
      </View>

      <Text style={unconditionalStyles.price}>${product.price}</Text>

      <View style={{ width: "100%", gap: 10 }}>
        <Text style={unconditionalStyles.title}> Select size </Text>
        <View style={{ width: "100%" }}>
          <FlatList
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
            keyExtractor={(item) => item.toString() + "size"}
            data={sizes}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setIsActive(item);
                }}
                style={
                  conditionalStyles(item.toString(), isActive.toString()).size
                }
              >
                <Text
                  style={
                    conditionalStyles(item.toString(), isActive.toString())
                      .sizeText
                  }
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{ width: "100%", gap: 15 }}>
          <Text style={unconditionalStyles.title}> {product.title} </Text>
          <Text style={{ color: COLORS.smTxt }}> {product.description} </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              width: "100%",
              padding: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
