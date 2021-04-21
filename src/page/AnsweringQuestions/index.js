import React from 'react';
import { useNavigation } from "@react-navigation/core"

import { StyleSheet, Text, View } from 'react-native';

import Button from "../../components/Button"
import Background from '../../components/Background';

export default function AnsweringQuestions() {

  const { navigate, goBack } = useNavigation()

  const togglePage = () => {
    goBack()
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>AgroQuiz</Text>
        <Text style={styles.text}>AnsweringQuestions</Text>


        <View style={styles.btn}>
          <Button title="goBack" onPress={togglePage} />
          <Button 
            title="Visualizar Questionario" 
            onPress={() => 
              navigate("VisualizarQuestionario")
            } 
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
