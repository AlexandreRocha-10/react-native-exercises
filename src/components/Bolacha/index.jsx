import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Pessoas from '../Pessoas';
import pessoas from '../utils/people';

export default function Bolacha() {
  const [data, setData] = useState(pessoas);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => <Pessoas data={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.flatList}
      />
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
  flatList: {
    width: '100%',
  },
});
