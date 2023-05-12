import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Routes } from "@routes/index";
import { Loading } from "./src/components/Loading";

import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}