import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import Discount from '../components/Discount';
import avatarImg from '../assets/mock-image.png';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

function HomeScreen({ navigation }) {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const [user, setUser] = useState({
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    avatarImg
  })

  const [discounts, setDiscounts] = useState([
    {
      id: '987urrhr82430832',
      name: 'Check',
      discountPercentage: '87%',
      startDate: '2023-09-09',
      endDate: '2023-09-16',
      startTime: '10:00:00',
      endTime: '18:00:00',
      product: {
        name: 'Check scooter',
        description: 'Electric scooter',
        price: '39.60',
        category: 'Cars and Motorcycles',
        image: 'https://images.unsplash.com/photo-1665937124595-21fda56e95e3',
        quantity: 5000,
        shop: {
          name: 'Check Technologies B.V',
          industry: 'Technology',
          address: '',
          postCode: '',
          city: 'Amsterdam',
          country: 'Netherlands',
          longitude: 52.36,
          latitude: 4.90,
          openingHours: ''
        }
      }
    },
    {
      id: '44656urrhr82430832',
      name: 'Check',
      discountPercentage: '87%',
      startDate: '2023-09-09',
      endDate: '2023-09-16',
      startTime: '10:00:00',
      endTime: '18:00:00',
      product: {
        name: 'Check scooter',
        description: 'Electric scooter',
        price: '39.60',
        category: 'Cars and Motorcycles',
        image: 'https://images.unsplash.com/photo-1665937124595-21fda56e95e3',
        quantity: 5000,
        shop: {
          name: 'Check Technologies B.V',
          industry: 'Technology',
          address: '',
          postCode: '',
          city: 'Amsterdam',
          country: 'Netherlands',
          longitude: 52.36,
          latitude: 4.90,
          openingHours: ''
        }
      }
    },
    {
      id: '35645urrhr82430832',
      name: 'Check',
      discountPercentage: '87%',
      startDate: '2023-09-09',
      endDate: '2023-09-16',
      startTime: '10:00:00',
      endTime: '18:00:00',
      product: {
        name: 'Check scooter',
        description: 'Electric scooter',
        price: '39.60',
        category: 'Cars and Motorcycles',
        image: 'https://images.unsplash.com/photo-1665937124595-21fda56e95e3',
        quantity: 5000,
        shop: {
          name: 'Check Technologies B.V',
          industry: 'Technology',
          address: '',
          postCode: '',
          city: 'Amsterdam',
          country: 'Netherlands',
          longitude: 52.36,
          latitude: 4.90,
          openingHours: ''
        }
      }
    },
    {
      id: '2435urrhr82430832',
      name: 'Check',
      discountPercentage: '87%',
      startDate: '2023-09-09',
      endDate: '2023-09-16',
      startTime: '10:00:00',
      endTime: '18:00:00',
      product: {
        name: 'Check scooter',
        description: 'Electric scooter',
        price: '39.60',
        category: 'Cars and Motorcycles',
        image: 'https://images.unsplash.com/photo-1665937124595-21fda56e95e3',
        quantity: 5000,
        shop: {
          name: 'Check Technologies B.V',
          industry: 'Technology',
          address: '',
          postCode: '',
          city: 'Amsterdam',
          country: 'Netherlands',
          longitude: 52.36,
          latitude: 4.90,
          openingHours: ''
        }
      }
    }
])

useEffect(() => {
  const subscription = Dimensions.addEventListener(
    'change',
    ({window, screen}) => {
      setDimensions({window, screen});
    },
  );
  return () => subscription?.remove();
});

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
    <SafeAreaView
    style={styles.container}
    >
      <Text style={styles.primaryTitleText}>Good morning {user.firstName} {user.lastName}!</Text>
      <Text style={styles.temperatureText}>It's 25 degrees in Amsterdam ☀️</Text>
      <Text style={styles.primaryTitleText}>Nearby discounts 📌</Text>
      
      {/* <ScrollView style={{flex: 1, flexWrap: 'wrap'}}>
        {discounts.map(discount => {
          return <Discount key={discount.id} discount={discount} />
        })}
      </ScrollView> */}
      <FlatList 
        data={discounts}
        renderItem={(discount) => <Discount discount={discount} />}
        keyExtractor={discount => discount.id}
      />
      
      <Button
        title="Go to Profile"
        onPress={() => {
          /* 1. Navigate to the Profile route with params */
          navigation.navigate('Profile');
        }}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;