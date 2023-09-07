import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import avatarImg from '../assets/mock-image.png';
function HomeScreen({ navigation }) {
  const [user, setUser] = useState({
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    avatarImg
  })

  const [discounts, setDiscounts] = useState([{
    name: '',
    discountPercentage: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    product: {
      name: '',
      description: '',
      price: '',
      category: '',
      quantity: 0,
      shop: {
        name: '',
        address: '',
        postCode: '',
        city: '',
        country: '',
        longitude: 0,
        latitude: 0,
        openingHours: ''
      }
    }
  }])

  const styles = StyleSheet.create({
    container:  {
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
  temperatureText: {
    marginTop: 10
  },
  secondaryTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  });

  return (
    <View 
    style={styles.container}
    >
      <Text style={styles.primaryTitleText}>Good morning {user.firstName} {user.lastName}!</Text>
      <Text style={styles.temperatureText}>It's 25 degrees in Amsterdam ☀️</Text>
      <Text style={styles.primaryTitleText}>Nearby discounts 📌</Text>
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