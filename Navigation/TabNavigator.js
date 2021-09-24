import  React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreatePost";


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
  return (
  
      <Tab.Navigator
        screenOptions={({ route }) => ({  headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'newspaper'
                : 'newspaper-outline';
                
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'add-circle-outline'  : 'add-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed}  />
        <Tab.Screen name="Create Post" component={CreateStory} />
      </Tab.Navigator>
 
  );
}
export default BottomTabNavigator;