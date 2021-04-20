import React from 'react';
import { useNavigation } from "@react-navigation/core"

import { Container, Text, ButtonNext } from './styled';

import Button from "../../components/Button"

export default function HomePage() {

  const { navigate } = useNavigation()

  const togglePage = () => {
    navigate("Pagina2")
  }

  return (
    <Container>
      <Text>AgroQuiz</Text>

      <ButtonNext>
        <Button title="next" onPress={togglePage} />
      </ButtonNext>
    </Container>
  );
}
