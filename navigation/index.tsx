
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListDetailScreen from '../screens/listDetailScreen';
import { RootStackParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';

export default function Navigation() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator 
    screenOptions={{
      animation:'slide_from_right'
    }}>

    <Stack.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{ headerShown: true }} />

    <Stack.Screen
      name="ListDetail" 
      component={ListDetailScreen} 
      options={{ headerShown: true }} />
    
    </Stack.Navigator>
  );
}