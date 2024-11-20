import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { ExamplePaper } from "./screens/ExamplePaper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ExamplePanGesture } from "./screens/ExamplePanGesture";
import { ExamplePinchGesture } from "./screens/ExamplePinchGesture";

const theme: ThemeProp = {
  roundness: 2,
  "colors": {
    "primary": "rgb(187, 195, 255)",
    "onPrimary": "rgb(17, 34, 134)",
    "primaryContainer": "rgb(45, 60, 156)",
    "onPrimaryContainer": "rgb(223, 224, 255)",
    "secondary": "rgb(255, 183, 134)",
    "onSecondary": "rgb(80, 36, 0)",
    "secondaryContainer": "rgb(114, 54, 0)",
    "onSecondaryContainer": "rgb(255, 220, 198)",
    "tertiary": "rgb(255, 184, 101)",
    "onTertiary": "rgb(72, 42, 0)",
    "tertiaryContainer": "rgb(102, 61, 0)",
    "onTertiaryContainer": "rgb(255, 221, 186)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(27, 27, 31)",
    "onBackground": "rgb(228, 225, 230)",
    "surface": "rgb(27, 27, 31)",
    "onSurface": "rgb(228, 225, 230)",
    "surfaceVariant": "rgb(70, 70, 79)",
    "onSurfaceVariant": "rgb(199, 197, 208)",
    "outline": "rgb(144, 144, 154)",
    "outlineVariant": "rgb(70, 70, 79)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(228, 225, 230)",
    "inverseOnSurface": "rgb(48, 48, 52)",
    "inversePrimary": "rgb(71, 85, 182)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(35, 35, 42)",
      "level2": "rgb(40, 40, 49)",
      "level3": "rgb(45, 46, 56)",
      "level4": "rgb(46, 47, 58)",
      "level5": "rgb(49, 51, 62)"
    },
    "surfaceDisabled": "rgba(228, 225, 230, 0.12)",
    "onSurfaceDisabled": "rgba(228, 225, 230, 0.38)",
    "backdrop": "rgba(47, 48, 56, 0.4)"
  }
}

export default function App() {
  return (

    <PaperProvider theme={theme}>
      <GestureHandlerRootView>
        <View style={styles.container}>
          <ExamplePinchGesture />
        </View>
      </GestureHandlerRootView>
    </PaperProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors?.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 48,
  }
})