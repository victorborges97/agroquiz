import React, { useState, useEffect }  from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core"

import { questions } from "../../services/data.json"

import Background from '../../components/Background';
import CardQuestionView from '../../components/CardQuestionView';

export default function AnsweringQuestions() {
  const [answeredQuestions,setAnsweredQuestions] = useState([])

  const { navigate, goBack } = useNavigation()

  useEffect(() => {

    const filtered = questions.filter((item) => 
      item.isAnswered === true
    )

    setAnsweredQuestions(filtered)

  },[])

  return (
    <Background>
      <View style={styles.container}>
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
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  btn: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 50,
  },
});
