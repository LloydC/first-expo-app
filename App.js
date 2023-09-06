import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackNavigator from './navigation/RootStackNavigator';
import ExploreStackNavigator from './navigation/ExploreStackNavigator';
import ProfileStackNavigator from './navigation/ProfileStackNavigator';

const Root = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name='Home' component={RootStackNavigator}/>
        <Root.Screen name='Explore' component={ExploreStackNavigator} />
        <Root.Screen name='Profile' component={ProfileStackNavigator}/>
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
