import React from "react";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs initialRouteName="index" >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="search" options={{ headerShown: false }} />
      <Tabs.Screen name="plus" options={{ headerShown: false }} />
      <Tabs.Screen name="cart" options={{ headerShown: false }} />
      <Tabs.Screen name="user" options={{ headerShown: false }} />

    </Tabs>
  );
};

export default HomeLayout;
