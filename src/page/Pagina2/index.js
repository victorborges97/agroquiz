import React from 'react';
import { useNavigation } from "@react-navigation/core"

import { StyleSheet, Text, View } from 'react-native';

import Button from "../../components/Button"

export default function Pagina2() {

  const { navigate, goBack } = useNavigation()

  const togglePage = () => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AgroQuiz</Text>
      <Text style={styles.text}>Pagina2</Text>


      <View style={styles.btn}>
        <Button title="goBack" onPress={togglePage} />
      </View>
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
  text: {
    fontSize: 25,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});
