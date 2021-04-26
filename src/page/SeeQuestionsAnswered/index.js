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
  SubHeader,
  ContainerQuestion,
  CardQuestion,
  Question,
  Answer,
  ButtonGoBack,
 } from './styled';

export default function SeeQuestionsAnswered({ route }) {

  const { User } = useUser();
  const [seeQuestions,setSeeQuestions] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [refresh, setRefresh] = useState(false)
  const { navigate, goBack } = useNavigation()

  const { item } = route.params;

  const InitialTitulo = "Título do questionario montado"

  async function getData() {
    const { data } = await api.get(`questions?user=${User.id}&id=${item.id}`)
    setSeeQuestions(data)
    console.log(data)
  }

  const refreshingControl = () => {
    setRefresh(oldRefres => !oldRefres)
    getData()
    setRefresh(oldRefres => !oldRefres)
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
      


      
      
      <ContainerQuestion>
        
        <SubHeader>1 de X</SubHeader>
        
        <CardQuestion>
          <Question>
          Pergunta ......
          </Question>
          
          <Answer 
          
          />
        </CardQuestion>

        <Button 
          title="Proxima"
          onPress={togglePage}
          height="34px"
          themeCancel
          bold
        />

      </ContainerQuestion>




      <ButtonGoBack>
        {
          false && (
            <Button 
              title="Voltar"
              onPress={togglePage}
              height="34px"
              themeCancel
              bold
            />
          )
        }
        {
          false ? (
            <Button
              title="SALVAR"
              onPress={() => {}}
              height="34px"
              bold
            />
          ) : null
        }
      </ButtonGoBack>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    
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
