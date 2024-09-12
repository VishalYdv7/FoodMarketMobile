import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import products from '../data/ProductData';
import CustomButton from '../components/CustomButton';
import ProductCard from '../components/ProductCard';

const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return description;
};

const ProductScreen = ({ onProductPress, onGoToCart ,onGoHome }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onGoHome}>
          <Image
            source={require('../../../assets/images/home-icon.png')}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoHome}>
          <Text style={styles.companyName}>Food Market</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.name}
            price={item.price}
            description={truncateDescription(item.description, 6)}
            image={item.image}
            onPress={() => onProductPress(item)}
          />
        )}
      />
      <CustomButton title="Go to Cart" onPress={onGoToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021526',
    color:'#FFFFF',
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  homeIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  companyName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProductScreen;