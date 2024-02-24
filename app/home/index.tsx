import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import Welcome from "@/components/home/Welcome";
import ItemsContainer from "@/components/home/ItemsContainer";

const Home = () => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.primary,
    },

    ImportantTitle: {
      width: "80%",
      color: COLORS.whiteBoardL,
      fontSize: 30,
      fontWeight: "bold",
    },
  });
  const conditionalStyles = (regBtnLabel?: string) => StyleSheet.create({});

  return (
    <SafeAreaView style={unconditionalStyles.container}>
      <ScrollView style={{ flex: 1, }}>
        <View style={{ width: "100%" }}>
          <Welcome />
        </View>
        <ItemsContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
