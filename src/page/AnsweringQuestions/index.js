import React, { useState, useEffect }  from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/core"

import { Container } from "./styled"

import CardQuestionView from '../../components/CardQuestionView';
import { useUser } from '../../context';
import api from '../../services/api';

export default function AnsweringQuestions() {
  const { User } = useUser();
  const [answeredQuestions,setAnsweredQuestions] = useState([])

  const { navigate, goBack } = useNavigation()

  async function getData() {
    const { data } = await api.get(`questions?user=${User.id}&isAnswered=true`)
    console.log(data)
    setAnsweredQuestions(data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
      <Container>
        <FlatList 
          data={answeredQuestions}
          renderItem={({item}) => (
            <CardQuestionView 
              question={item} 
              
              fontText="11px"
              onPressClear={() => 
                alert("Excluido")
              }
              onPressTrue={() => 
                navigate("SeeQuestionsAnswered", { item: item })
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
  );
}
