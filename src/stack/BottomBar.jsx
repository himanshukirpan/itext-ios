
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { useCounterStore } from '../store/counter';
import { Button } from 'react-native-paper';
const Tab = createMaterialBottomTabNavigator(); 

const HomeScreen = () =>{
  
const { count, increment } = useCounterStore();

  return <>
  <Text style={{
    marginTop:100
  }}>Home Screen {count}</Text>
  <Button onPress={()=>{
    increment()
  }}>Ok</Button>
  <Text>{count}</Text>
  </>};
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

