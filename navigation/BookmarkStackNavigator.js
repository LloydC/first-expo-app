import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createMaterialBottomTabNavigator();

function BookmarkStackNavigator() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'grey', color: 'white' }}>
    <Tab.Screen name="HomePage" component={HomeScreen} options={{tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="ExplorePage" component={ExploreScreen} options={{tabBarLabel: 'Explore', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map-outline" color={color} size={26} /> 
              // also name="near-me" or name="map-search"
        ),
      }} />
      <Tab.Screen name="Bookmarks" component={BookmarkScreen} options={{tarBarLabel: 'Bookmarks',tabBarIcon: ({ color })=> (
        <MaterialCommunityIcons  name="heart-outline" color={color} size={26} />
      ) }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{tarBarLabel: 'Profile',tabBarIcon: ({ color })=> (
        <MaterialCommunityIcons  name="account" color={color} size={26} />
      ) }} />
  </Tab.Navigator>
  );
}

export default BookmarkStackNavigator;