import React from 'react';
import {
    View,
    Text,
    Animated,
    Pressable,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blurHeaderOptions, styles} from "./BlurHeaderOptions";
import HomePage from "../pages/auth/HomePage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const CustomPage = ({name = "Home Screen"}) => {
    return <View style={styles.screen}>
        <Text style={{color: 'white', fontSize: 24}}>{name}</Text>
    </View>
}

function DynamicStack({stackKey}) {
    return (
        <Stack.Navigator screenOptions={blurHeaderOptions}>
            {stackScreens[stackKey].map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{title: screen.title}}
                />
            ))}
        </Stack.Navigator>
    );
}

const stackScreens = {
    Home: [
        {
            name: "HomeMain",
            component: HomePage,
            title: "Home"
        },
    ],
    Settings: [
        {
            name: "SettingsMain",
            component: (props) => <CustomPage {...props} name="Setting Page"/>,
            title: "Settings"
        },
    ],
    Store: [
        {
            name: "StoreMain",
            component: (props) => <CustomPage {...props} name="Store Page"/>,
            title: "Store"
        },
    ],
    About: [
        {
            name: "AboutMain",
            component: (props) => <CustomPage {...props} name="About Page"/>,
            title: "About"
        },
    ],
};
const tabConfig = [
    {name: "Home", stackKey: "Home", label: "Home", icon: "home"},
    {name: "Settings", stackKey: "Settings", label: "Settings", icon: "cog"},
    {name: "Store", stackKey: "Store", label: "Store", icon: "store"},
    {name: "About", stackKey: "About", label: "About", icon: "information"},
];


const pillColor = '#3b82f6';
const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
    const focused = accessibilityState.selected;
    const scaleValue = React.useRef(new Animated.Value(focused ? 1 : 0)).current;

    React.useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: focused ? 1 : 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [focused]);

    return (
        <Pressable onPress={onPress} style={{flex: 1, alignItems: 'center'}}>
            <View style={{position: 'absolute', top: 1, bottom: 12, left: 20, right: 20}}>
                <Animated.View
                    style={[
                        styles.pillBackground,
                        {
                            backgroundColor: pillColor,
                            opacity: scaleValue,
                            transform: [
                                {
                                    scale: scaleValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.7, 1],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            </View>
            {children}
        </Pressable>
    );
};


export default () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#888",
                tabBarStyle: {
                    backgroundColor: "#111",
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                    borderTopWidth: 0,
                },
            }}
        >
            {tabConfig.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        tabBarLabel: tab.label,
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name={tab.icon} color={color} size={size}/>
                        ),
                        tabBarButton: (props) => <CustomTabBarButton {...props} />,
                    }}
                >
                    {() => <DynamicStack stackKey={tab.stackKey}/>}
                </Tab.Screen>
            ))}
        </Tab.Navigator>
    );
}

