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
import ContactPage from "../pages/auth/contact/ContactPage";
import ContactHeader from "../pages/auth/contact/ContactHeader";
import MessageHeader from "../pages/auth/message/MessageHeader";
import MessagePage from "../pages/auth/message/MessagePage";


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
            name="Contacts"
            component={ContactPage}
            options={{
                headerShown: true, // full custom header
                header: () => (<ContactHeader/>),
                tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="account-group"
                    color={color}
                    size={size}
                    focused={focused}
                />),
            }}
        />
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
            component={MessagePage}
            options={{
                headerShown: true, // full custom header
                header: () => (<MessageHeader/>),
                tabBarIcon: ({color, size, focused}) => (<AnimatedIcon
                    name="message-text"
                    color={color}
                    size={size}
                    focused={focused}
                />),
            }}
        />




    </Tab.Navigator>);
}
