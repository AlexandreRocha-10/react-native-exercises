import { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

export default function ModalExample() {

    const [modal, setModal] = useState(false);

    const entrar = () => {
        !modal ? setModal(true) : setModal(false);
    };

    return (
        <View style={styles.container}>
            <Button
            title='Entrar'
            onPress={entrar}
            />

            <Modal
            animationType='fade'
            visible={modal}
            >
                <View style={styles.modal}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Seja Bem-Vindo!
                    </Text>

                    <Button 
                    title='Sair'
                    onPress={entrar}
                    />

                </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        width: '70%',
        height: 300,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    modalText: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
});