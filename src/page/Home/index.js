import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/core";

import { Container } from './styled';

import CardQuestion from '../../components/CardQuestion';
import { useUser } from '../../context';
import colors from '../../styles/colors';
import api from '../../services/api';


export default function HomePage() {
  const { User } = useUser();
  const [questionsUnanswered, setQuestionsUnanswered ] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)


  const { navigate, goBack } = useNavigation()

  async function getData() {
    const { data } = await api.get(`questions?user=${User.id}&isAnswered=false`)

    setQuestionsUnanswered(data)
  }

  useFocusEffect(
    useCallback(() => {
      let mounted = true

      getData()
      setLoading(false)

      return () => mounted = false
    }, [])
  );

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

  const handleButtonNext = (item) => {
    navigate("AnsweringQuestions", { item: item })
  }

  const handleEdit = (item) => {
    navigate("EditingQuestion", { item: item.id })
  }

  return (
      <Container>

      {
        loading ? 
            <ActivityIndicator style={{ height: "90%" }} color={colors.bg_botton_bar} size="large" />
            :
            (
              <FlatList 
                style={{
                  width: "100%",
                }}
                data={questionsUnanswered}
                renderItem={({item}) => (
                  <CardQuestion 
                    question={item} 
                    iconHeader
                    fontText="11px"
                    onPressClear={() => 
                      handleButtonExcluir(item.id)
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
                extraData={refresh}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 17,
                  paddingTop: 20,
                }}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={refreshingControl} />
                }
              />
            )
      }
      </Container>
  );
}
