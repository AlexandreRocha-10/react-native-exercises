import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Biscoito() {
  const [titleText, setTitleText] = useState('"Alguma frase aqui!"');
  const [image, setImage] = useState(require('../../../assets/biscoito.png'));

  const fortuneCookies = [
    "Seu futuro é brilhante!",
    "Boas coisas acontecerão com você em breve.",
    "Sua criatividade trará sucesso financeiro.",
    "O amor está ao seu redor.",
    "Você é mais forte do que pensa.",
    "Grandes coisas estão por vir.",
    "Acredite em si mesmo e siga em frente.",
    "Um novo começo está em seu futuro.",
    "Você encontrará a felicidade em pequenas coisas.",
    "A sorte sorri para você hoje.",
  ];

  const randomPhrase = () => {
    let randomNumber = Math.floor(Math.random() * fortuneCookies.length);
    setTitleText(fortuneCookies[randomNumber]);
  };

  const onPressTitle = () => {
    randomPhrase();
    setImage(require('../../../assets//biscoitoAberto.png'));
    setTimeout(() => {
      setImage(require('../../../assets//biscoito.png'));
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={image}
      />
      <Text style={styles.baseText}>
        { titleText }
      </Text>

      <TouchableOpacity style={styles.btn} onPress={onPressTitle}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>
            Abrir Biscoito
          </Text>
        </View>
      </TouchableOpacity>

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
  img: {
    width: 250,
    height: 250,
  },
  baseText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
  },
  btn: {
    width: 220,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#dd7b22',
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#dd7b22',
    fontWeight: 'bold',
  },
});
