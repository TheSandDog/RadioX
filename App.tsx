import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const App: React.FC = () => {
  const headerHeight = 50; // Adjust this value based on the actual height of your header

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/icon.png")} // Make sure to adjust the path to your icon
          style={styles.headerImage}
        />
      </View>
      <Text style={[styles.text, { marginBottom: -headerHeight }]}>
        Bienvenue sur Choi 98.1 RadioX
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363940",
  },
  header: {
    backgroundColor: "#f7d534",
    height: 50, // Adjust the height of the header
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
  },
  headerImage: {
    width: 50, // Adjust the width of the image as needed
    height: 50, // Adjust the height of the image as needed
  },
  text: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
