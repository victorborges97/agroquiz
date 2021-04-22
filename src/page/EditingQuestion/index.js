import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/core"
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useUser } from '../../context';
import Modal from 'react-native-modal';

import colors from '../../styles/colors';
import { Container,
  InputTitulo,
  InputTituloText,
  InputTituloTextInput,
  ButtonGoBack,
  CardList,
  CardLine,
  ButtonAdd
} from './styled';
import api from '../../services/api';

import Button from "../../components/Button"
import Background from '../../components/Background';
import SeeQuestion from '../../components/SeeQuestion';
import ModalEditing from '../../components/Modal';

const INITIAL_QUESTION =  { 
  "question": "",
  "answer": "",
  "data_register": "",
  "isRequired": false,
  "localization": {
      "lat": "",
      "log": ""
  }
}

export default function EditingQuestion({ route }) {

  const { User } = useUser();

  const [info, setInfo] = useState([])
  const [questions, setQuestions] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isModalAlertaVisible, setModalAlertaVisible] = useState(false);
  const [selectQuestion, setSelectQuestion] = useState(null);
  const [selectQuestionIdx, setSelectQuestionIdx] = useState(null);
  const { navigate, goBack } = useNavigation()
  const { item } = route.params;

  const togglePage = () => {
    setInfo([])
    setQuestions([])
    goBack()
  }

  async function getData() {
    try {
      if(item) {
        const { data } = await api.get(`questions?user=${User.id}&id=${item}`)
        setInfo(data[0]);
        setQuestions(data[0].questions)
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)

  }

  useEffect(() => {
    getData()
  },[])

  const toggleQuestions = (idx, value, name) => {
    const newQuestion = questions;

    newQuestion[idx][name] = value;

    setQuestions(newQuestion)
  }

  const removeQuestion = (idx) => {
    const newQuestion = questions;

    newQuestion.splice(idx, 1);

    setQuestions(newQuestion)
    setRefresh(oldRefres => !oldRefres)
  }

  return (
    <Background stack >
      <Container>

        <Modal
          animationIn="bounceIn" 
          animationOut="bounceOut" 
          isVisible={isModalAlertaVisible}
          onBackdropPress={() => setModalAlertaVisible(false)}
        >
          <ModalEditing 
            onPressClear={() => setModalAlertaVisible(false)}
            onPressTrue={() => {}}
          />
        </Modal>

        <InputTitulo>
          <InputTituloText>Título</InputTituloText>
          <InputTituloTextInput
            value={info ? info.title : ""}
          />
        </InputTitulo>

        <CardLine>
          <ButtonAdd >
            <RectButton onPress={() => { alert("Add") }}>
              <Feather name="plus" size={18} color={colors.color_line} />
            </RectButton>
          </ButtonAdd>
        </CardLine>

        <CardList>
          {
            loading ? 
            <ActivityIndicator style={{ height: "90%" }} color={colors.bg_botton_bar} size="large" />
            :
            (

              <FlatList
                style={{ width: "100%" }}
                data={questions}
                renderItem={({ item, index }) => (
                  <SeeQuestion
                    key={index}
                    question={item}
                    onPressSwitch={(resp) => { toggleQuestions(index, resp, "isRequired") }}
                    onPressClear={() => { removeQuestion(index) }}
                    onPressEdit={() => { setSelectQuestion(item); setModalAlertaVisible(true) }}
                  />
                )}
                extraData={refresh}
                keyExtractor={item => item.question || item.id}
                showsVerticalScrollIndicator={false}
              />
            )
          }
        </CardList>

        <ButtonGoBack>
          <Button 
            title="Voltar"
            onPress={togglePage}
            height="34px"
            themeCancel
          />
        </ButtonGoBack>
        
      </Container>
    </Background>
  );
}
