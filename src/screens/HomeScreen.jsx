import { Surface, Switch, Text } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";

export default function HomeScreen() {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <Surface
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      <Text>Mudar Tema</Text>
    </Surface>
  );
}
