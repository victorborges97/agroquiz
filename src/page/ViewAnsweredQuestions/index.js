import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/core"
import { useUser } from '../../context';

import api from '../../services/api';
import colors from '../../styles/colors';
import Button from "../../components/Button"

import { 
  Container,
  ContainerHeader,
  TextHeader,
  CardQuestion,
  Question,
  ButtonGoBack,
  Answered,
  ContainerQuestionAnsered
 } from './styled';

export default function ViewAnsweredQuestions({ route }) {

  const { User } = useUser();
  const [seeQuestions,setSeeQuestions] = useState({})
  const [Questions,setQuestions] = useState(null)
  const { navigate, goBack } = useNavigation()

  const { item } = route.params;

  const InitialTitulo = "Título do questionario montado"

  async function getData() {
    const { data } = await api.get(`questions?user=${User.id}&id=${item.id}`)
    setSeeQuestions(data[0])
    setQuestions(data[0].questions)
  }

  useEffect(() => {
    getData()
  },[])

  const togglePage = () => {
    goBack()
  }

  return (
    <Container>
    
      <ContainerHeader>
        <TextHeader>{ item ? item.title : InitialTitulo }</TextHeader>
      </ContainerHeader>
      
      <ContainerQuestionAnsered>
        {
          Questions && Questions.map((item, index) => (
            <CardQuestion Answered key={index}>
              <Question>
                {item.question}
              </Question>
              
              <Answered>
                {item.answer}
              </Answered>
            </CardQuestion>
          ))
        }
      </ContainerQuestionAnsered>

      <ButtonGoBack>
        <Button
          title={"Voltar"}
          onPress={togglePage}
          height="34px"
          bold
          themeCancel
        />
      </ButtonGoBack>
      
    </Container>
  );
}