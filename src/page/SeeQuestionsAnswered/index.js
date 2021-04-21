import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/core"

import Button from "../../components/Button"
import Background from "../../components/Background"
import colors from '../../styles/colors';

export default function SeeQuestionsAnswered(props) {

  const { navigate, goBack } = useNavigation()

  const InitialTitulo = "Título do questionario montado"

  const togglePage = () => {
    goBack()
  }

  return (
    <Background>
    
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>{ props.data ? props.data.title : InitialTitulo }</Text>
      </View>
      
      <Text style={styles.text}>SeeQuestionsAnswered</Text>


      <View style={styles.btn}>
        <Button title="goBack" onPress={togglePage} />
      </View>

    </Background>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    // backgroundColor: "#dbdbdb",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
  },
  textHeader: {
    width: "60%",
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    lineHeight: 23,
    color: colors.text_bold_agro,
  },
  text: {
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});
