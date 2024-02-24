import { View, Text } from "react-native";
import React from "react";
import Styles from "@/styles/GeneralStyles";
import RegTitle from "@/components/register/RegTitle";
import RegInput from "@/components/register/RegInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import COLORS from "@/constants/public/COLORS";
import RegButton from "@/components/register/RegButton";
import GoogleButton from "@/components/register/GoogleButton";
import RegScreenSwitcher from "@/components/register/RegScreenSwitcher";

const SignUp = () => {
  return (
    <View style={Styles.unconditionalStyles.container}>
      <View
        style={{
          flex: 1,
          gap: 20,
          justifyContent: "space-evenly",
        }}
      >
        <RegTitle title="Lets get Started" />

        <View style={{ width: "100%", gap: 20 }}>
          <RegInput
            placeHolder="Email"
            Icon={<Fontisto name="email" size={24} color={COLORS.smTxt} />}
          />
          <RegInput
            placeHolder="Password"
            Icon={<Feather name="lock" size={24} color={COLORS.smTxt} />}
          />
          <RegInput
            placeHolder="Confirm Password"
            Icon={<Feather name="lock" size={24} color={COLORS.smTxt} />}
          />
        </View>

        <RegButton text="Sign up" />
        <Text style={{ textAlign: "center", color: COLORS.smTxt }}>
          {" "}
          or continue with{" "}
        </Text>

        <GoogleButton />
        <RegScreenSwitcher
          linkText="Already have account ?"
          path="login"
          title="login"
        />
      </View>
    </View>
  );
};

export default SignUp;
