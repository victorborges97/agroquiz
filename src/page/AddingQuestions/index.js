import React, { useEffect, useState } from 'react';
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
import SeeQuestion from '../../components/SeeQuestion';
import ModalEditing from '../../components/Modal';

export default function AddingQuestions() {
  const { User } = useUser();

  const INITIAL_INFO = {
    "title": "", 
    "user": User.id,
    "isAnswered": false,
    "data_register": new Date(), 
    "questions": []
  }

  const [info, setInfo] = useState(INITIAL_INFO)
  const [questions, setQuestions] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isModalAlertaVisible, setModalAlertaVisible] = useState(false);
  const [selectQuestion, setSelectQuestion] = useState(null);
  const [selectQuestionIdx, setSelectQuestionIdx] = useState(null);
  const { navigate, goBack } = useNavigation()

  const connectApiAndBackPage = async() => {

    let dataNew = info;
    dataNew.questions = questions;
    dataNew.isAnswered = false;
    dataNew.data_register = new Date();
    dataNew.user = User.id;

    const { data } = await api.post(`questions`, dataNew)

    if(data) {
      setInfo([])
      setQuestions([])
      goBack();
    } else {
      alert("Aconteceu algum error ao enviar!")
    }
  }

  const backPage = () => {
    setInfo([])
    setQuestions([])
    goBack();
  }

  const saveQuestion = (newItem, type, index) => {
    switch (type) {
      case "NEW":
        if(newItem){
          let dataNew = questions;
          dataNew.push(newItem);
          setQuestions(dataNew);
        }

        break;
      case "EXISTING":
        if(newItem && index){
          const oldQuestion = questions;
          oldQuestion[index] = newItem;
          setQuestions(oldQuestion);
        }

        break;
      default:
        break;
    }
    setModalAlertaVisible(false);
    setRefresh(oldRefres => !oldRefres)
  }
  
  const addNewQuestion = () => {
    setSelectQuestion(false)
    setModalAlertaVisible(true)
  } 

  const removeQuestion = (idx) => {
    const newQuestion = questions;

    newQuestion.splice(idx, 1);

    setQuestions(newQuestion)
    setRefresh(oldRefres => !oldRefres)
  }

  const openQuestion = (question, index) => {
    setSelectQuestionIdx(index)
    setSelectQuestion(question)
    setModalAlertaVisible(true)
  }

  return (
      <Container>

        <Modal
          animationIn="bounceIn" 
          animationOut="bounceOut" 
          isVisible={isModalAlertaVisible}
          onBackdropPress={() => setModalAlertaVisible(false)}
        >
          <ModalEditing 
            id={questions.length + 1}
            onPressClear={() => setModalAlertaVisible(false)}
            onPressTrue={(item, type, index) => { saveQuestion(item, type, index) }}
            question={selectQuestion}
            idx={selectQuestionIdx}
          />
        </Modal>

        <InputTitulo>
          <InputTituloText>Título</InputTituloText>
          <InputTituloTextInput
            value={info ? info.title : ""}
            onChangeText={text => {
              setInfo({
                ...info,
                "title": text
              })
            }}
          />
        </InputTitulo>

        <CardLine>
          <ButtonAdd >
            <RectButton onPress={addNewQuestion}>
              <Feather name="plus" size={18} color={colors.color_line} />
            </RectButton>
          </ButtonAdd>
        </CardLine>

        <CardList>
          {
            questions && questions.map((item, index) => (
              <SeeQuestion
                key={index}
                question={item}
                onPressClear={() => { removeQuestion(index) }}
                onPressEdit={() => { openQuestion(item, index) }}
              />
            ))
          }
        </CardList>

        <ButtonGoBack>
          <Button 
            title="Voltar"
            onPress={backPage}
            height="34px"
            themeCancel
            bold
          />
          <Button 
            title="SALVAR"
            onPress={connectApiAndBackPage}
            height="34px"
            bold
          />
        </ButtonGoBack>
        
      </Container>
  );
}
