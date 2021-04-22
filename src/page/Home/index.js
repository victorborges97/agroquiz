import React, { useState, useEffect } from 'react';
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Container } from './styled';
import { questions } from "../../services/data.json";

import Background from '../../components/Background';
import CardQuestion from '../../components/CardQuestion';


export default function HomePage() {

  const [questionsUnanswered, setQuestionsUnanswered ] = useState([])

  const { navigate, goBack } = useNavigation()

  useEffect(() => {

    const filtered = questions.filter((item) => 
      item.isAnswered === false
    )

    setQuestionsUnanswered(filtered)

  },[])

  const handleButtonCancel = (item) => {
    alert(`Cancel, ${item.questions.length}`)
  }

  const handleButtonNext = (item) => {
  }

  const handleEdit = (item) => {
    navigate("EditingQuestion", { item: item })
  }

  return (
    <Background>
      <Container>

        <FlatList 
          data={questionsUnanswered}
          renderItem={({item}) => (
            <CardQuestion 
              question={item} 
              iconHeader
              fontText="11px"
              onPressClear={() => 
                handleButtonCancel(item)
              }
              onPressTrue={() => 
                handleButtonNext(item)
              }
              onPressEdit={() =>
                handleEdit(item)
              }
            /> 
          )}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 17,
            paddingTop: 20,
          }}
        />
      </Container>
    </Background>
  );
}
