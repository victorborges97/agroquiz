import React from 'react';
import { useNavigation } from "@react-navigation/core"

import { Container, ButtonNext } from './styled';

import Button from "../../components/Button"
import Background from '../../components/Background';
import CardQuestion from '../../components/CardQuestion';

const data = { title: "Perguntas para Turma de Algoritimos", questions: [0,1,2,3,4,5], isAnswered: false }

export default function HomePage() {

  const { navigate } = useNavigation()

  const togglePage = () => {
    navigate("Pagina2")
  }

  return (
    <Background>
      <Container>

        <CardQuestion 
          question={data} 
          iconHeader  
        /> 

        <ButtonNext>
          <Button title="next" onPress={togglePage} />
        </ButtonNext>
      </Container>
    </Background>
  );
}
