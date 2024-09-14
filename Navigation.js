import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

//screens
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Stack from './src/screens/Stack';

const TabNav = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <TabNav.Navigator initialRouteName='Home'>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='Stack' component={Stack} />
    </TabNav.Navigator>
  );
}

function RoutingTabs() {
  return (
    <TabNav.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'yellow',
      }}
    >
      <TabNav.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Hola',
          tabBarIcon: ({ color, size }) => <AntDesign name='frown' size={24} color='black' />,
          headerShown: false,
        }}
      />
      <TabNav.Screen name='Profile' component={Profile} />
    </TabNav.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RoutingTabs />
    </NavigationContainer>
  );
}
