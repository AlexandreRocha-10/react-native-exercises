import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TextAsync() {
    const [inputName, setinputName] = useState('');
    const [names, setNames] = useState([]);

    // useEffect(() => {
    //     async function saveName() {
    //         try {
    //             await AsyncStorage.setItem('inputName', inputName);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    
    //     saveName();
    // }, [inputName]);
    
    // useEffect(() => {
    //     async function getSavedName() {
    //         try {
    //             const savedName = await AsyncStorage.getItem('inputName');
    //             setinputName(savedName);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    
    //     getSavedName();
    // }, []);


    const onPressPlus = () => {
        setNames(prevNames => [...prevNames, inputName]);
        setinputName('');
        Keyboard.dismiss();
    }


    return (
        <View style={styles.container}>

            <View style={styles.viewInput}>
                <TextInput
                style={styles.input}
                value={inputName}
                onChangeText={e => setinputName(e)} 
                underlineColorAndroid='transparent'
                keyboardType='default'
                />

                <TouchableOpacity
                onPress={onPressPlus}
                >
                    <Text
                    style={styles.btn}
                    >
                        +
                    </Text>
                </TouchableOpacity>

            </View>


            {names.map((name, index) => (
                <Text 
                key={index} 
                style={styles.names}
                >
                    {name}
                </Text>

            ))}


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
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    btn: {
        height: 40,
        backgroundColor: '#222',
        color: '#FFF',
        padding: 10,
        marginLeft: 4,
    },
    names: {
        margin: 15,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});