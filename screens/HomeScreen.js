import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({ navigation }) {

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
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;