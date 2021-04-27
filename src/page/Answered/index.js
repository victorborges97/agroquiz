import React, { useState, useEffect, useCallback }  from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/core"

import { Container } from "./styled"

import CardQuestionView from '../../components/CardQuestionView';
import { useUser } from '../../context';
import api from '../../services/api';

export default function Answered() {
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

  const handleButtonExcluir = async (id) => {
    const { data } = await api.delete(`questions/${id}`)
    if(data) {
      alert("Excluido com sucesso!")
      refreshingControl()
    } else {
      alert("Algo deu errado!")
    }
  }

  useFocusEffect(
    useCallback(() => {
      let mounted = true

      getData()

      return () => mounted = false
    }, [])
  );

  return (
      <Container>
        <FlatList 
          style={{
            width: "100%",
          }}
          data={answeredQuestions}
          renderItem={({item}) => (
            <CardQuestionView 
              question={item}
              fontText="11px"
              onPressClear={() => { handleButtonExcluir(item.id) }}
              onPressTrue={() => 
                navigate("ViewAnsweredQuestions", { item: item })
              }
            /> 
          )}
          keyExtractor={(item, index) => index.toString()}
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
