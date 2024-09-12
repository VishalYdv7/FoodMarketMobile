import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, price,description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#03346E',
    padding: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 120,
    marginRight: 20,
  },
  textContainer: {
    flex: 1, 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 14,
    marginBottom: 8,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ProductCard;
