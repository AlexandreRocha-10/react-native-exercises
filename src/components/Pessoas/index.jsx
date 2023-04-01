import { StyleSheet, View, Text } from 'react-native';

export default function Pessoas({ data }) {
  return (
    <View style={styles.item}>
        <Text style={styles.text}>Nome: {data.item.nome}</Text>
        <Text style={styles.text}>Idade: {data.item.idade}</Text>
        <Text style={styles.text}>Email: {data.item.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
});