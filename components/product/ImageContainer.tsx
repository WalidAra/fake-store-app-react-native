import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type Props = {
  img: string;
};

const ImageContainer = ({ img }: Props) => {
  const unconditionalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f0f4f7",
      paddingHorizontal: 20,
    },
    img: {
      width: "100%",
      aspectRatio: 1,
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <View style={unconditionalStyles.container}>
      <Image
        style={unconditionalStyles.img}
        source={{
          uri: img
            ? img
            : "https://i.pinimg.com/564x/26/43/3c/26433c7678cde0436cb7f74e1081e070.jpg",
        }}
      />
    </View>
  );
};

export default ImageContainer;
