import React, {useState} from 'react';
import { View, Button, Image, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import avatarImg from '../assets/mock-image.png';

function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    avatarImg
  })
  const styles = StyleSheet.create({
    container: {
      width:150,
      flex: 1, 
      marginLeft: 10
      // alignItems: 'center',
      // justifyContent: 'center'
    },
    primaryTitleText: {
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 10
    },
    secondaryTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    userContainer: { 
      marginTop: 10 
    },
    imageAvatar: {
      width: 100, 
      height: 100, 
      borderRadius: 50 
    }
  });

  return (
    <View 
    style={styles.container}
    >
      <Text style={styles.primaryTitleText}>Profile</Text>
      <View style={styles.userContainer}>
        <Image source={user.avatarImg} style={styles.imageAvatar} />
        <Text style={styles.secondaryTitleText}>{user.firstName} {user.lastName}</Text>
      </View>

      <Text style={styles.primaryTitleText}>Account</Text>
    </View>
  );
}

export default ProfileScreen;