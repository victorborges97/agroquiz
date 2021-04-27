import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/core"
import { useUser } from '../../context';

import api from '../../services/api';
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
  ContainerButtonQuestion,
 } from './styled';

export default function AnsweringQuestions({ route }) {

  const { User } = useUser();
  const [seeQuestions,setSeeQuestions] = useState({})
  const [Questions,setQuestions] = useState(null)
  const [numberIdx, setNumberIdx] = useState(0);
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

  const handleApi = async () => {

    try {
      let dataNew = seeQuestions;
      dataNew.questions = Questions;
      dataNew.isAnswered = true;
      dataNew.user = User.id;

      const { data } = await api.put(`questions/${item.id}`, dataNew)

      if(data) {
        setQuestions([]);
        goBack();
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleInputQuestion = (text, idx) => {
    const oldQuestion = Questions;
    oldQuestion[numberIdx].answer = text
    
    setQuestions([...oldQuestion])
  }

  const handleNextQuestion = () => {
    const isEmpty = Questions && Questions[numberIdx].answer !== ""
                
    if(isEmpty) {
      setNumberIdx(numberIdx + 1);
    } else {
      alert("Campo de resposta vazio, por favor preencha o campo de resposta!")
    }
  }

  const handlePrevQuestion = () => {
    setNumberIdx(numberIdx - 1);
  }

  const totalIndex = Questions && Questions.length

  return (
    <Container>
    
      <ContainerHeader>
        <TextHeader>{ item ? item.title : InitialTitulo }</TextHeader>
      </ContainerHeader>
      
      <ContainerQuestion>
        
        <SubHeader>{numberIdx+1} de { totalIndex ? totalIndex : 0}</SubHeader>
        
        {
          totalIndex > 0 && (
            <CardQuestion>
              <Question>
                {Questions ? Questions[numberIdx].question : "Enunciado da questão..."}
              </Question>
              
              <Answer 
                value={Questions ? Questions[numberIdx].answer : ""}
                onChangeText={text => handleInputQuestion(text, numberIdx)}
              />
            </CardQuestion>
          )
        }

        <ContainerButtonQuestion>
          {
            numberIdx > 0 && (
              <Button 
                title="Voltar"
                onPress={handlePrevQuestion}
                height="34px"
                themeCancel
                bold
              />
            )
          }
          {
            numberIdx+1 < totalIndex && (
              <Button 
              title="Proxima"
              onPress={handleNextQuestion}
              height="34px"
              themeCancel
              bold
              />
            )
          }
        </ContainerButtonQuestion>

      </ContainerQuestion>

      <ButtonGoBack>
        <Button
          title="Cancelar"
          onPress={togglePage}
          height="34px"
          bold
          themeCancel
        />
        {
          numberIdx+1 >= totalIndex && (
            <Button
              title="SALVAR"
              onPress={handleApi}
              height="34px"
              bold
            />
          )
        }
      </ButtonGoBack>
      
    </Container>
  );
}