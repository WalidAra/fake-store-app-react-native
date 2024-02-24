import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";

type Props = {
  text: string;
  mt?: number;
};

const RegButton = ({ text, mt }: Props) => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      width: "100%",
    },

    btn: {
      backgroundColor: COLORS.whiteBoardL,
      paddingVertical: 4,
      paddingHorizontal: 20,
      borderRadius: 99,
      marginTop: mt ? mt : 0,
    },

    textBtn: {
      color: COLORS.primary,
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
        <Text style={unconditionalStyles.textBtn}> {text} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegButton;