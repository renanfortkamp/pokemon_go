// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login/Login.js";
import Home from "./src/pages/Home/Home.js";
import NewPlayer from "./src/pages/NewPlayer/NewPlayer";
import ChoisePokemon from "./src/pages/ChoisePokemon/ChoisePokemon";
import Terms from "./src/pages/Terms/Terms";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#0D4DA3",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                    }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{
                        title: "Novo Jogador",
                        headerStyle: {
                            backgroundColor: "#0D4DA3",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                    }}
                    name="NewPlayer"
                    component={NewPlayer}
                />
                <Stack.Screen
                    options={{
                        title: "Escolha Seu Pokemon",
                        headerStyle: {
                            backgroundColor: "#0D4DA3",
                        },
                        headerTintColor: "#fff",
                        headerTitleAlign: "center",
                    }}
                    name="ChoisePokemon"
                    component={ChoisePokemon}
                />
                <Stack.Screen name="Terms" component={Terms} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
