import { useState } from 'react';
import { StyleSheet, View, Text, Animated, TouchableOpacity } from 'react-native';

export default function Animation() {
    const [largura, setlargura] = useState(200);
    const [altura, setaltura] = useState(80);
    const [preco, setpreco] = useState(150);

    const loadGraf = () => {
        // Animated.sequence([
        //     Animated.timing(
        //         altura,
        //         {
        //             toValue: 200,
        //             duration: 2000,
        //         }
        //     )

        // ]).start();

    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.btnarea}
                onPress={loadGraf}
                >
                    <Text style={styles.btn}>
                        Gerar Grafico
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <Animated.View
                style={
                    {
                    width: largura,
                    height: altura,
                    backgroundColor: '#4169E1',
                    justifyContent: 'center',
                    }
                }
                >
                    <Text
                    style={
                        {
                        color: '#FFF',
                        fontSize: 20,
                        textAlign: 'center',
                        }
                    }
                    >
                        R$: {preco}
                    </Text>
                </Animated.View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'lightblue',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    header: {
        height: 80,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnarea: {
        width: 220,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        // borderColor: '#dd7b22',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        fontSize: 20,
        // color: '#dd7b22',
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: 500,
    },
});