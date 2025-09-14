import LoginPage from "../pages/guest/LoginPage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from "../pages/guest/RegisterPage";
import TabStack from "./TabStack";
import NumberPage from "../pages/auth/dialpad/NumberPage";
import MyNumberDetailPage from "../pages/auth/dialpad/MyNumberDetailPage";
import PaymentPage from "../pages/auth/dialpad/PaymentPage";
import PricingPage from "../pages/auth/dialpad/PricingPage";
import SelectNumberPage from "../pages/auth/dialpad/SelectNumberPage";

const Stack = createNativeStackNavigator();

export default (() => {
    return <Stack.Navigator screenOptions={{
        headerBackTitleVisible: false, // removes the back text
        headerStyle: {
            backgroundColor: "#16a34a", // ✅ Header background
        },
        headerTintColor: "#fff", // ✅ Back button & icons color
        headerTitleStyle: {
            color: "#fff", // ✅ Title text color
            fontWeight: "bold",
        }
    }}>
        <Stack.Screen
            name={'tabs'}
            component={TabStack}
            options={{title: "tabs", headerShown: false}}
        />
        <Stack.Screen
            name={"numbers"}
            component={NumberPage}
            options={{title: 'Numbers', headerShown: true}}
        />
        <Stack.Screen
            name={"my_number"}
            component={MyNumberDetailPage}
            options={{title: 'My Number Details', headerShown: true}}
        />
        <Stack.Screen
            name={'payment'}
            component={PaymentPage}
            options={{title: "Payment", headerShown: true}}
        />
        <Stack.Screen
            name={'pricing'}
            component={PricingPage}
            options={{title: "Pricing", headerShown: true}}
        />
        <Stack.Screen
            name={'select_number'}
            component={SelectNumberPage}
            options={{title: "Select Number", headerShown: true}}
        />

    </Stack.Navigator>
});