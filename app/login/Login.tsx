import { Text, View } from "react-native";
import React from "react";
import Styles from "@/styles/GeneralStyles";
import COLORS from "@/constants/public/COLORS";
import RegTitle from "@/components/register/RegTitle";
import RegInput from "@/components/register/RegInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import RegButton from "@/components/register/RegButton";
import GoogleButton from "@/components/register/GoogleButton";
import RegScreenSwitcher from "@/components/register/RegScreenSwitcher";

const Login = () => {
  return (
    <View style={Styles.unconditionalStyles.container}>
      <View
        style={{
          flex: 1,
          gap: 20,
          justifyContent: "center",
        }}
      >
        <RegTitle title="Hello Welcome Back" />
        <View style={{ width: "100%", gap: 18 }}>
          <RegInput
            placeHolder="Email"
            Icon={<Fontisto name="email" size={24} color={COLORS.smTxt} />}
          />
          <RegInput
            placeHolder="Password"
            Icon={<Feather name="lock" size={24} color={COLORS.smTxt} />}
          />
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={{ color: COLORS.whiteBoardL, fontWeight: "500" }}>
            Forget password?
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            gap: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RegButton text="login" />
          <Text style={{ textAlign: "center", color: COLORS.smTxt }}>
            {" "}
            or continue with{" "}
          </Text>
          <GoogleButton />
          <RegScreenSwitcher
            linkText="Dont have account?"
            path="/sign-up"
            title="sign-up"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
