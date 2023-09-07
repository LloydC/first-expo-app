import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackNavigator from './navigation/RootStackNavigator';
import ExploreStackNavigator from './navigation/ExploreStackNavigator';
import BookmarkStackNavigator from './navigation/BookmarkStackNavigator';
import ProfileStackNavigator from './navigation/ProfileStackNavigator';

const Root = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name='Home' component={RootStackNavigator} options={{ title: 'Home' }}/>
        <Root.Screen name='Explore' component={ExploreStackNavigator} options={{ title: 'Explore' }} />
        <Root.Screen name='Bookmark' component={BookmarkStackNavigator} options={{ title: 'Bookmark' }} />
        <Root.Screen name='Profile' component={ProfileStackNavigator} options={{ title: 'Profile' }}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
