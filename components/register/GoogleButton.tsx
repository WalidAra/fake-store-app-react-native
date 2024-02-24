import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import { AntDesign } from "@expo/vector-icons";

const GoogleButton = () => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      width: "100%",
    },

    btn: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: COLORS.smTxt,
      paddingVertical: 4,
      paddingHorizontal: 20,
      borderRadius: 99,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },

    textBtn: {
      color: COLORS.whiteBoardL,
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
      padding: 10,
    },
  });
  const conditionalStyles = (regBtnLabel?: string) => StyleSheet.create({});
  return (
    <View style={unconditionalStyles.container}>
      <TouchableOpacity style={unconditionalStyles.btn}>
        <AntDesign name="google" size={24} color={COLORS.whiteBoardL} />
        <Text style={unconditionalStyles.textBtn}> Google </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleButton;
