import React, {useEffect} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {useSharedValue, useAnimatedStyle, withSpring} from "react-native-reanimated";

// Screens
import MessagesScreen from "../pages/auth/MessagesScreen";
import HomePage from "../pages/auth/home/HomePage";
import {StatusBar, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import DialpadPage from "../pages/auth/dialpad/DialpadPage";
import DialpadHeader from "../pages/auth/dialpad/DialpadHeader";
import RecentPage from "../pages/auth/recent/RecentPage";
import RecentHeader from "../pages/auth/recent/RecentHeader";

// Replace with your real ones later
const ContactsScreen = MessagesScreen;
const MoreScreen = MessagesScreen;

const Tab = createBottomTabNavigator();

// Animated Icon
function AnimatedIcon({name, color, size, focused}) {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withSpring(focused ? 1.2 : 1, {
            damping: 10, stiffness: 200,
        });
    }, [focused]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{scale: scale.value}],
    }));

    return (<Animated.View style={animatedStyle}>
        <MaterialCommunityIcons name={name} color={color} size={size}/>
    </Animated.View>);
}

export default function TabStack() {

    return (<Tab.Navigator

        screenOptions={{
            headerShown: true, tabBarActiveTintColor: "red", tabBarInactiveTintColor: "#888",

        }}
    >
        <Tab.Screen
            name="Recent"
            component={RecentPage}
            options={{
                headerShown: true, // full custom header
                header: () => (<RecentHeader/>),
                tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="restore"
                    color={color}
                    size={size}
                    focused={focused}
                />),
            }}
        />
        <Tab.Screen
            name="DialPad"
            component={DialpadPage}
            options={{
                headerShown: true, // full custom header
                header: () => (<DialpadHeader/>),
                tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="apps"
                    color={color}
                    size={size}
                    focused={focused}
                />)
            }}
        />
        <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
                headerShown: true, // full custom header
                header: () => (<SafeAreaView edges={['top']} className="bg-green-600">
                    <StatusBar barStyle="light-content" backgroundColor="#16a34a"/>
                    <View className="flex-row justify-between items-center px-4 py-3">
                        <Text className="text-xl font-bold text-white">Messages</Text>
                        <Text className="text-white font-semibold">My Balance: £3100.05</Text>
                    </View>
                </SafeAreaView>),
                tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="message-text"
                    color={color}
                    size={size}
                    focused={focused}
                />),
            }}
        />


        <Tab.Screen
            name="Contacts"
            component={ContactsScreen}
            options={{
                headerShown: true, // full custom header
                header: () => (<SafeAreaView edges={['top']} className="bg-green-600">
                    <StatusBar barStyle="light-content" backgroundColor="#16a34a"/>
                    <View className="flex-row justify-center text-center px-4 py-3">
                        <Text className="text-xl text-center font-bold text-white">Contacts</Text>
                    </View>
                </SafeAreaView>), tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="account-group"
                    color={color}
                    size={size}
                    focused={focused}
                />),
            }}
        />


    </Tab.Navigator>);
}
