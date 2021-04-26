import React, { useState, useEffect }  from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation } from "@react-navigation/core"

import { Container } from "./styled"

import CardQuestionView from '../../components/CardQuestionView';
import { useUser } from '../../context';
import api from '../../services/api';

export default function AnsweringQuestions() {
  const { User } = useUser();
  const [answeredQuestions,setAnsweredQuestions] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [refresh, setRefresh] = useState(false)
  const { navigate, goBack } = useNavigation()

  async function getData() {
    const { data } = await api.get(`questions?user=${User.id}&isAnswered=true`)
    setAnsweredQuestions(data)
  }

  const refreshingControl = () => {
    setRefresh(oldRefres => !oldRefres)
    getData()
    setRefresh(oldRefres => !oldRefres)
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
          extraData={refresh}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refreshingControl} />
          }
        />
      </Container>
  );
}
