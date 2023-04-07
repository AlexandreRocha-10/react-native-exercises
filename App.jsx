import { StyleSheet, View, FlatList } from 'react-native';

import Biscoito from './src/components/Biscoito';
import Bolacha from './src/components/Bolacha';
import Divisoria from './src/components/Divisoria';
import ModalExample from './src/components/ModalExample';
import Pizza from './src/components/Pizza';
import SliderBar from './src/components/SliderBar';
import SwitchBar from './src/components/SwitchBar';
import TextAsync from './src/components/TextAsync';
import Animation from './src/components/Animation';
import Effects from './src/components/Effects';

export default function App() {
  const data = [
    { id: '1', component: <Biscoito /> },
    { id: '2', component: <Divisoria /> },
    { id: '3', component: <Bolacha /> },
    { id: '4', component: <Divisoria /> },
    { id: '5', component: <Pizza /> },
    { id: '6', component: <Divisoria /> },
    { id: '7', component: <SliderBar /> },
    { id: '8', component: <Divisoria /> },
    { id: '9', component: <SwitchBar /> },
    { id: '10', component: <Divisoria /> },
    { id: '11', component: <TextAsync /> },
    { id: '12', component: <Divisoria /> },
    { id: '13', component: <ModalExample /> },
    { id: '14', component: <Divisoria /> },
    { id: '15', component: <Animation /> },
    { id: '16', component: <Divisoria /> },
    { id: '17', component: <Effects /> },
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
