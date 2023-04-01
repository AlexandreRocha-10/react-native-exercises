import { StyleSheet, View, FlatList } from 'react-native';


import Biscoito from './src/components/Biscoito';
import Bolacha from './src/components/Bolacha';
import Pizza from './src/components/Pizza';
import SliderBar from './src/components/SliderBar';
import SwitchBar from './src/components/SwitchBar';


SwitchBar
export default function App() {
  const data = [
    { id: '1', component: <Biscoito /> },
    { id: '2', component: <Bolacha /> },
    { id: '3', component: <Pizza /> },
    { id: '4', component: <SliderBar /> },
    { id: '5', component: <SwitchBar /> },
  ];

  function renderItem({ item }) {
    return (
      <View>
        {item.component}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
});
