import React from 'react';
import { View, Text } from 'react-native';

const ComponenteCalcular = ({ n1, n2 }) => {
  const soma = n1 + n2;
  const sub = n1 - n2;
  const mult = n1 * n2;
  const divi = n1 / n2;

  return (
    <View>
      <Text>{`Soma: ${n1} + ${n2} = ${soma}`}</Text>
      <Text>{`Subtração: ${n1} - ${n2} = ${sub}`}</Text>
      <Text>{`Multiplicação: ${n1} x ${n2} = ${mult}`}</Text>
      <Text>{`Divisão:  ${n1} / ${n2} = ${divi}`}</Text>
    </View>
  );
};

export default ComponenteCalcular;