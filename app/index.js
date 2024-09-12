import { StyleSheet, Text, View } from "react-native";
import App from "./app.js";

export default function Page() {
  return (
    <App/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021526',
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#FFFFFF",
  },
});
