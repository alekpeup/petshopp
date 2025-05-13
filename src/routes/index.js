import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login/index";
const { Navigator, Screen } = createNativeStackNavigator();
function Routes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}

export default Routes;
