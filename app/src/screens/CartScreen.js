import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const CartScreen = ({ onGoBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart is not functional yet!</Text>
      <CustomButton title="Back to Products" onPress={onGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021526',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    margin:10,
  },
});

export default CartScreen;
