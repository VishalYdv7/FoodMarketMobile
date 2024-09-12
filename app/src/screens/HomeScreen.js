import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ onGoShopping }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!,</Text>
      <Text style={styles.midHeader}>to the</Text>
      <Text style={styles.bigHeader}>Food Market!</Text>
      <CustomButton title="Go Shopping!!" onPress={onGoShopping} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#021526',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  midHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 16,
  },
  bigHeader: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});

export default HomeScreen;