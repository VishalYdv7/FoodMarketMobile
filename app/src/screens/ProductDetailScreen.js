import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const ProductDetailScreen = ({ product, onGoBack }) => {
  if (!product) {
    return null; // Return null or an empty view if no product is selected
  }
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <CustomButton style={styles.button} title="Add to Cart" onPress={() => alert('Cart not functional yet!')} />
      <CustomButton style={styles.button} title="Back to Products" onPress={onGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021526',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius:20,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button:{
    padding: 5,
    margin:10,
  },
  description:{
    fontSize: 18,
    color: '#FFFFFF',
  },
  price: {
    color: '#FFFFFF',
    fontSize: 24,
    margin: 20,
  },
});

export default ProductDetailScreen;
