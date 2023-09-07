import React from 'react';
import { View, Text, Button } from 'react-native';
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
      <Button
        title="Go to Profile"
        onPress={() => {
          /* 1. Navigate to the Profile route with params */
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}

export default HomeScreen;