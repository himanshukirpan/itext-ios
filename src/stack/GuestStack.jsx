import LoginPage from "../pages/guest/LoginPage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from "../pages/guest/RegisterPage";
const Stack = createNativeStackNavigator();

export default (() => {
    return <Stack.Navigator  options={{headerShown: false}}>
        <Stack.Screen
            name={'login'}
            component={LoginPage}
            options={{title: "Login", headerShown: false}}
        />
        <Stack.Screen
            name={'register'}
            component={RegisterPage}
            options={{title: "Register", headerShown: false}}
        />
    </Stack.Navigator>
});