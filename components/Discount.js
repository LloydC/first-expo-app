import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Discount({ discount }){

    const calculateDiscountPrice = (price, discount) => {
        const result = parseFloat(discount)/100
        return (price - price*result).toFixed(2);
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // marginBottom: 10
        },
        discountImage: {
            width: 100,
            height: 100,
            borderRadius: 2,
            marginTop: 10
        },
        discountTitle: {
            fontSize: 10,
            fontWeight: 'bold',
        },
        originalPrice: {
            fontSize: 9,
            color: 'grey',
            textDecorationColor: 'grey',
            textDecorationLine: 'line-through'
        },
        discountedPrice: {
            fontSize: 9,
            color: 'green'
        }

    });

    return (
        <View style={styles.container}>
            <Image src={discount.product.image} style={styles.discountImage} />
            <Text style={styles.discountTitle}>{discount.name}</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: 100}}>
                <Text style={styles.originalPrice}>¢{discount.product.price}</Text>
                <Text style={styles.discountedPrice}>¢{calculateDiscountPrice(discount.product.price, discount.discountPercentage)}</Text>
            </View>
        </View>
    );
}

export default Discount;