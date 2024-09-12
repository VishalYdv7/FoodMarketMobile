import React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({ title, onPress, mode = "contained", style }) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={style}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
