import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const pillColor = '#3b82f6';

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
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
    <Pressable onPress={onPress} style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ position: 'absolute', top: 1, bottom: 12, left: 20, right: 20 }}>
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

const blurHeaderOptions = {
  headerTransparent: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { color: 'white', fontWeight: 'bold' },
  headerTintColor: 'white',
  headerBackground: () => (
    <BlurView
      blurType="light"
      blurAmount={20}
      style={StyleSheet.absoluteFill}
      reducedTransparencyFallbackColor="#111"
    />
  ),
};

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={{ color: 'white', fontSize: 24 }}>Home Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={{ color: 'white', fontSize: 24 }}>Settings Screen</Text>
  </View>
);

const StoreScreen = () => (
  <View style={styles.screen}>
    <Text style={{ color: 'white', fontSize: 24 }}>Store Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.screen}>
    <Text style={{ color: 'white', fontSize: 24 }}>About Screen</Text>
  </View>
);

// Stack wrappers for each tab screen
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={blurHeaderOptions}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={blurHeaderOptions}>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function StoreStack() {
  return (
    <Stack.Navigator screenOptions={blurHeaderOptions}>
      <Stack.Screen name="StoreMain" component={StoreScreen} options={{ title: 'Store' }} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={blurHeaderOptions}>
      <Stack.Screen name="AboutMain" component={AboutScreen} options={{ title: 'About' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // IMPORTANT to hide tab navigator header and avoid two headers
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#111',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Store"
          component={StoreStack}
          options={{
            tabBarLabel: 'Store',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store" color={color} size={size} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStack}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="information" color={color} size={size} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pillBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 9999, // pill shape
  },
  screen: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
