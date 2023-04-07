import { StyleSheet, View } from 'react-native';

export default function Divisoria() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: '100%',
        height: 2,
        marginTop: 20,
        marginBottom: 20,
    },
});