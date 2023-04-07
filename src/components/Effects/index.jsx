import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Effects() {
    const [inputName, setinputName] = useState('');
    const [name, setName] = useState('Lucas');
    const input = useRef(null);

    useEffect(() => {
        async function saveName() {
            await AsyncStorage.setItem('name', name);
        }
        saveName();
    }, [name]);
    
    useEffect(() => {
        async function getSavedName() {
            const savedName = await AsyncStorage.getItem('name');
            if (savedName) {
                setName(savedName);
            }
        }
        getSavedName();
    }, []);


    const onPressPlus = () => {
        input.current.focus();
    }

    const onPressAlterar = () => {
        setName(inputName);
        setinputName('');
    }


    return (
        <View style={styles.container}>

            <View style={styles.viewInput}>
                <TextInput
                style={styles.input}
                value={inputName}
                onChangeText={e => setinputName(e)} 
                underlineColorAndroid='transparent'
                ref={input}
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

            <View>
                <TouchableOpacity
                onPress={onPressAlterar}
                >
                    <Text
                    style={styles.btn}
                    >
                        Alterar
                    </Text>
                </TouchableOpacity>
            </View>

                <Text 
                style={styles.names}
                >
                    {name}
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