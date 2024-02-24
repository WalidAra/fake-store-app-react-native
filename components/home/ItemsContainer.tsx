import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import MainSlider from "./MainSlider";
import SecondSlider from "./SecondSlider";

const ItemsContainer = () => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.whiteBoardL,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
  });
  const conditionalStyles = (regBtnLabel?: string) => StyleSheet.create({});

  return (
    <View style={unconditionalStyles.container}>
      <MainSlider />
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Latest</Text>

        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: COLORS.smTxt }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      <SecondSlider />
    </View>
  );
};

export default ItemsContainer;
