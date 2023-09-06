import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();

function ExploreScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  // useEffect()

//   const styles = StyleSheet.create({
//     container: {
//      width: 'auto',
//      borderWidth: 1
//     },
//     button: {
//       alignItems: 'center',
//       backgroundColor: '#DDDDDD',
//       padding: 10,
//     },
//   });

  return (
    <View 
    style={{ 
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <Text>Explore Screen</Text>
    </View>
  );
}

export default ExploreScreen;