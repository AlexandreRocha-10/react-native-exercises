import { StyleSheet, View, Text, Switch } from 'react-native';
import { useState } from 'react';

export default function SwitchBar() {
  const [valor, setValor] = useState(false);

  return (
    <View style={styles.container}>
        <Switch
        style={styles.switch}
        value={valor}
        onValueChange={ (value) => setValor(value) }
        />

        <Text>
          {
            valor ? 'Esse é um ternário confirmando Ativado' : 'Esse é um ternário confirmando Desativado'
          }
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    switch: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});