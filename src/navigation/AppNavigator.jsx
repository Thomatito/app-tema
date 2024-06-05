import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext"; // que nós criamos
import {
  ThemeDark,
  ThemeDarkNavigation,
  ThemeLight,
  ThemeLightNavigation,
} from "../config/theme";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isDarkTheme } = useTheme();

  const theme = isDarkTheme ? ThemeDark : ThemeLight;
  const themeNavigation = isDarkTheme
    ? ThemeDarkNavigation
    : ThemeLightNavigation;

  return (
    <Provider theme={theme}>
      <NavigationContainer
        theme={themeNavigation}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
