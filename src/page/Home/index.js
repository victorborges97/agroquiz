import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Container } from './styled';

import Background from '../../components/Background';
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
    console.log(data)
    setQuestionsUnanswered(data)
  }

  useEffect(() => {
    console.log(User.id)
    getData()
    setLoading(false)
  },[])

  const refreshingControl = () => {
    setRefresh(oldRefres => !oldRefres)
    getData()
    setRefresh(oldRefres => !oldRefres)
  }

  const handleButtonCancel = (item) => {
    alert(`Cancel, ${item.questions.length}`)
  }

  const handleButtonNext = (item) => {
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
