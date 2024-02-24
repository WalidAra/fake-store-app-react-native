import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import COLORS from "@/constants/public/COLORS";
import { Feather } from "@expo/vector-icons";

type Props = {
  placeHolder: string;
  Icon: any;
};

const RegInput = ({ Icon, placeHolder }: Props) => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      width: "100%",
      position: "relative",
      paddingVertical: 16,
      paddingHorizontal: 20,
      paddingLeft: 55,
      backgroundColor: COLORS.quaternary,
      borderRadius: 99,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    Input: {
      flex: 1,
    },
    IconContainer: {
      position: "absolute",
      left: 18,
      color: "white",
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <View style={unconditionalStyles.container}>
      <View style={unconditionalStyles.IconContainer}>{Icon}</View>
      <TextInput
        placeholderTextColor={COLORS.smTxt}
        placeholder={placeHolder}
        style={unconditionalStyles.Input}
      />
    </View>
  );
};

export default RegInput;
