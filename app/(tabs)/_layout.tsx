import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Meditation",
          tabBarActiveTintColor: "#1C170D",
          tabBarInactiveTintColor: "#9E8047",
          tabBarIcon: (props) => {
            return (
              <Image
                source={require("../../assets/images/icon-home.png")}
                style={[{ tintColor: props.focused ? "#1C170D" : "#9E8047" }]}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarActiveTintColor: "#1C170D",
          tabBarInactiveTintColor: "#9E8047",
          tabBarIcon: (props) => {
            return (
              <Image
                source={require("../../assets/images/icon-todo.png")}
                style={[{ tintColor: props.focused ? "#1C170D" : "#9E8047" }]}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="achievement"
        options={{
          title: "Achievements",
          tabBarActiveTintColor: "#1C170D",
          tabBarInactiveTintColor: "#9E8047",
          tabBarIcon: (props) => {
            return (
              <Image
                source={require("../../assets/images/icon-badges.png")}
                style={[{ tintColor: props.focused ? "#1C170D" : "#9E8047" }]}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarActiveTintColor: "#1C170D",
          tabBarInactiveTintColor: "#9E8047",
          tabBarIcon: (props) => {
            return (
              <Image
                source={require("../../assets/images/icon-settings.png")}
                style={[{ tintColor: props.focused ? "#1C170D" : "#9E8047" }]}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _Layout;
