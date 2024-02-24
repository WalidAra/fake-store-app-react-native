import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  const unconditionalStyles = StyleSheet.create({
    regContainer: {
      flex: 1,
      justifyContent: "space-between",
      padding: 30,
      backgroundColor: COLORS.primary,
    },
  });
  const conditionalStyles = (regBtnLabel?: string) =>
    StyleSheet.create({
      regBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 9999,
        backgroundColor:
          regBtnLabel === "login" ? COLORS.whiteBoardL : COLORS.tertiary,
      },

      regBtnLabel: {
        color: regBtnLabel === "login" ? COLORS.primary : COLORS.whiteBoardL,
        fontSize: 18,
        fontWeight: "500",
      },
    });

  return (
    <View style={unconditionalStyles.regContainer}>
      <View style={{ flex: 1 }}></View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/login/Login");
          }}
          style={conditionalStyles("login").regBtn}
        >
          <Text style={conditionalStyles("login").regBtnLabel}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/signUp/SignUp");
          }}
          style={conditionalStyles("sign-up").regBtn}
        >
          <Text style={conditionalStyles("sign-up").regBtnLabel}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
