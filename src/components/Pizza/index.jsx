import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import pizzas from '../utils/pizzas';

export default function Pizza() {
    const [selectedPizza, setSelectedPizza] = useState('');

    const handlePickerChange = (itemValue, _itemIndex) => {
        setSelectedPizza(itemValue);
    };

    const pizzasMap = pizzas.map((item, key) => {
        return <Picker.Item key={key} value={item} label={item.nome} />
    })


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>
                Menu Pizzas
            </Text>

            <Picker
            selectedValue={selectedPizza}
            onValueChange={handlePickerChange}
            style={styles.picker}
            >
                { pizzasMap }
            </Picker>

            <View>
            {
                selectedPizza ? 
                    <>
                        <Text style={styles.pizzas}>
                            Você escolheu: Pizza {selectedPizza.nome}
                        </Text>
                        <Text style={styles.pizzas}>
                            R$: {selectedPizza.preco}
                        </Text>
                    </> 
                 : ''
            }
            </View>
            
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
    picker: {
        width: '100%',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      margin: 15,
    },
    pizzas: {
      textAlign: 'center',
      fontSize: 20,
    }
});
  