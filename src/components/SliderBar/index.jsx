import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function SliderBar() {
  const [valor, setValor] = useState(50);

  return (
    <View style={styles.container}>
        <Slider
        style={styles.slider}
        minimumValue={0}
        minimumTrackTintColor="green"
        maximumValue={100}
        maximumTrackTintColor="red"
        onValueChange={ (value) => setValor(value) }
        />
        <Text>{ valor.toFixed(0) }</Text>
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
    slider: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
});