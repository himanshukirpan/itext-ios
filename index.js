/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import "./global.css";

// Create a custom theme
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#0af",   // Indigo
    secondary: "#0e90d1", // Indigo lighter
    background: "#F9FAFB", // Light gray
    surface: "#FFFFFF",
    text: "#111827", // Dark text
    placeholder: "#9CA3AF", // Gray placeholder
  },
  roundness: 10, // Rounded corners globally
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
