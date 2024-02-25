import { TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import COLORS from "@/constants/public/COLORS";

const AllProductsLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShown: true,
          headerTitle: "",
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <SimpleLineIcons name="menu" size={24} color="white" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack>
  );
};

export default AllProductsLayout;
