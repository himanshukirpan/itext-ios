
import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { useCounterStore } from '../store/counter';
import { Button } from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator(); 



const HomeScreen = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <View style={{ marginTop: 100, alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} >
          Increment
      </Button>
    </View>
  );
};


const SettingsScreen = () => <Text>Settings Screen</Text>;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        shifting={true} // optional
        barStyle={{ backgroundColor: '#888' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialDesignIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialDesignIcons name="cog" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

