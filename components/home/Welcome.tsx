import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "@/constants/public/COLORS";

const categories: string[] = [
  "men's clothes",
  "women's clothes",
  "electronics",
  "jewelery",
];

const Welcome = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const unconditionalStyles = StyleSheet.create({
    ImportantTitle: {
      width: "80%",
      color: COLORS.whiteBoardL,
      fontSize: 30,
      fontWeight: "bold",
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
  return (
    <View
      style={{
        width: "100%",
        gap: 20,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom:20,
        backgroundColor: COLORS.primary,
      }}
    >
      <Text style={unconditionalStyles.ImportantTitle}>
        Discover the modern sales in our shop
      </Text>
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
  );
};

export default Welcome;
