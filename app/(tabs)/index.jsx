import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const App = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
  
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Valores inválidos');
      return;
    }

    let res;
    switch (operacao) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Divisão por zero';
        break;
      default:
        res = 'Operação desconhecida';
    }
    setResultado(res.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor 1"
        value={valor1}
        onChangeText={setValor1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor 2"
        value={valor2}
        onChangeText={setValor2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calcular('+')} />
        <Button title="-" onPress={() => calcular('-')} />
        <Button title="*" onPress={() => calcular('*')} />
        <Button title="/" onPress={() => calcular('/')} />
      </View>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;