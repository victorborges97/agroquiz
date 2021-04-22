import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/core"

import { StyleSheet, Text, View } from 'react-native';
import { Container, InputTitulo, InputTituloText, InputTituloTextInput } from './styled';

import Button from "../../components/Button"
import Background from '../../components/Background';
import colors from '../../styles/colors';

const INITIAL_QUESTION =  { 
  "question": "",
  "answer": "",
  "data_register": "",
  "isRequired": false,
  "localization": {
      "lat": "",
      "log": ""
  }
}

export default function EditingQuestion({ route }) {
  const [questions, setQuestions] = useState([])
  const { navigate, goBack } = useNavigation()
  const { item } = route.params;

  const togglePage = () => {
    goBack()
    
  }

  useEffect(() => {
    setQuestions(item)
  },[])

  return (
    <Background stack >
      <Container>

        <InputTitulo>
          <InputTituloText>Título</InputTituloText>
          <InputTituloTextInput 
            value={questions ? questions.title : ""}
          />
        </InputTitulo>

        <View style={styles.btn}>
          <Button title="goBack" onPress={togglePage} />
        </View>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
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

  btn: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});
