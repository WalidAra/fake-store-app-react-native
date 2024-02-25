import { View } from "react-native";
import React from "react";
import Register from "@/components/register/Register";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Register />
      </NativeBaseProvider>
    </View>
  );
};

export default App;
